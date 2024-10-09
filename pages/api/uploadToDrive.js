import { google } from 'googleapis';
import formidable from 'formidable';
import fs from 'fs';
import path from 'path';

// ปรับ config เพื่อไม่ให้ Next.js พยายาม parse body
export const config = {
  api: {
    bodyParser: false,
  },
};

// ฟังก์ชันอัพโหลดไปยัง Google Drive
const uploadToDrive = async (file, folderId) => {
  // สำหรับความเข้ากันได้กับทั้ง formidable v2 และ v3+
  const filePath = file.filepath || file.path;

  if (!filePath) {
    throw new Error('File path is undefined');
  }

  const auth = new google.auth.GoogleAuth({
    keyFile: path.join(process.cwd(), 'credentials.json'),
    scopes: ['https://www.googleapis.com/auth/drive.file'],
  });

  const drive = google.drive({ version: 'v3', auth });

  const fileMetadata = {
    name: file.originalFilename,
    parents: [folderId], // ใช้ folderId ที่ส่งมาจาก client
  };

  const media = {
    mimeType: file.mimetype,
    body: fs.createReadStream(filePath),
  };

  console.log('Uploading file to Google Drive...');

  const response = await drive.files.create({
    resource: fileMetadata,
    media: media,
    fields: 'id, webViewLink, webContentLink',
  });

  console.log('File uploaded to Google Drive:', response.data.id);

  await drive.permissions.create({
    fileId: response.data.id,
    requestBody: {
      role: 'reader',
      type: 'anyone',
    },
  });

  console.log('Permissions set to anyone');

  const result = await drive.files.get({
    fileId: response.data.id,
    fields: 'webViewLink, webContentLink',
  });

  console.log('File links:', result.data.webViewLink);

  return result.data;
};

// ฟังก์ชัน handler สำหรับ API route
export default async function handler(req, res) {
  if (req.method === 'POST') {
    const form = formidable({
      multiples: false, // ตั้งค่าให้รับไฟล์เดียว
      keepExtensions: true, // เก็บนามสกุลไฟล์
    });

    try {
      // ใช้ Promise เพื่อรอการ parse เสร็จสิ้น
      const { fields, files } = await new Promise((resolve, reject) => {
        form.parse(req, (err, fields, files) => {
          if (err) reject(err);
          else resolve({ fields, files });
        });
      });

      console.log('Parsed fields:', fields);
      console.log('Parsed files:', files);

      // ตรวจสอบว่า 'file' เป็นอาร์เรย์หรือไม่
      const file = Array.isArray(files.file) ? files.file[0] : files.file;

      console.log('Uploaded file:', file); // ตรวจสอบข้อมูลไฟล์

      if (!file || !file.filepath) {
        return res.status(400).json({ success: false, message: 'No valid file uploaded' });
      }

      const folderId = fields.folderId || process.env.NEXT_PUBLIC_SHARED_DRIVE_ID;

      if (!folderId) {
        return res.status(400).json({ success: false, message: 'No folder ID provided' });
      }

      // อัปโหลดไฟล์ไปยัง Google Drive
      const driveFile = await uploadToDrive(file, folderId);

      // ส่งลิงก์กลับไปยัง client
      return res.status(200).json({ success: true, imageUrl: driveFile.webViewLink ,message : "อัปโหลดขึ้น Drive สำเร็จ"});
    } catch (error) {
      console.error('Error:', error);
      return res.status(500).json({ success: false, message: error.message });
    }
  } else {
    // หากไม่ใช่ POST method
    res.setHeader('Allow', ['POST']);
    res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
  }
}
// import { google } from 'googleapis';
// import formidable from 'formidable';
// import fs from 'fs';
// import path from 'path';

// // ปรับ config เพื่อไม่ให้ Next.js พยายาม parse body
// export const config = {
//   api: {
//     bodyParser: false,
//   },
// };

// // ฟังก์ชันอัพโหลดไปยัง Google Drive
// const uploadToDrive = async (file, folderId) => {
//   // สำหรับความเข้ากันได้กับทั้ง formidable v2 และ v3+
//   const filePath = file.filepath || file.path;

//   if (!filePath) {
//     throw new Error('File path is undefined');
//   }

//   // อ่าน credentials จาก environment variable
//   let credentials;
//   try {
//     credentials = JSON.parse(process.env.GOOGLE_CREDENTIALS);
//   } catch (error) {
//     console.error('Error parsing GOOGLE_CREDENTIALS:', error);
//     throw new Error('Invalid GOOGLE_CREDENTIALS format');
//   }

//   const auth = new google.auth.GoogleAuth({
//     credentials: credentials,
//     scopes: ['https://www.googleapis.com/auth/drive.file'],
//   });

//   const drive = google.drive({ version: 'v3', auth });

//   const fileMetadata = {
//     name: file.originalFilename,
//     parents: [folderId], // ใช้ folderId ที่ส่งมาจาก client
//   };

//   const media = {
//     mimeType: file.mimetype,
//     body: fs.createReadStream(filePath),
//   };

//   console.log('Uploading file to Google Drive...');

//   const response = await drive.files.create({
//     resource: fileMetadata,
//     media: media,
//     fields: 'id, webViewLink, webContentLink',
//   });

//   console.log('File uploaded to Google Drive:', response.data.id);

//   await drive.permissions.create({
//     fileId: response.data.id,
//     requestBody: {
//       role: 'reader',
//       type: 'anyone',
//     },
//   });

//   console.log('Permissions set to anyone');

//   const result = await drive.files.get({
//     fileId: response.data.id,
//     fields: 'webViewLink, webContentLink',
//   });

//   console.log('File links:', result.data.webViewLink);

//   return result.data;
// };

// // ฟังก์ชัน handler สำหรับ API route
// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const form = formidable({
//       multiples: false, // ตั้งค่าให้รับไฟล์เดียว
//       keepExtensions: true, // เก็บนามสกุลไฟล์
//     });

//     try {
//       // ใช้ Promise เพื่อรอการ parse เสร็จสิ้น
//       const { fields, files } = await new Promise((resolve, reject) => {
//         form.parse(req, (err, fields, files) => {
//           if (err) reject(err);
//           else resolve({ fields, files });
//         });
//       });

//       console.log('Parsed fields:', fields);
//       console.log('Parsed files:', files);

//       // ตรวจสอบว่า 'file' เป็นอาร์เรย์หรือไม่
//       const file = Array.isArray(files.file) ? files.file[0] : files.file;

//       console.log('Uploaded file:', file); // ตรวจสอบข้อมูลไฟล์

//       if (!file || !file.filepath) {
//         return res.status(400).json({ success: false, message: 'No valid file uploaded' });
//       }

//       const folderId = fields.folderId || process.env.NEXT_PUBLIC_SHARED_DRIVE_ID;

//       if (!folderId) {
//         return res.status(400).json({ success: false, message: 'No folder ID provided' });
//       }

//       // อัปโหลดไฟล์ไปยัง Google Drive
//       const driveFile = await uploadToDrive(file, folderId);

//       // ส่งลิงก์กลับไปยัง client
//       return res.status(200).json({ success: true, imageUrl: driveFile.webViewLink, message: "อัปโหลดขึ้น Drive สำเร็จ" });
//     } catch (error) {
//       console.error('Error:', error);
//       return res.status(500).json({ success: false, message: error.message });
//     }
//   } else {
//     // หากไม่ใช่ POST method
//     res.setHeader('Allow', ['POST']);
//     res.status(405).json({ success: false, message: `Method ${req.method} Not Allowed` });
//   }
// }

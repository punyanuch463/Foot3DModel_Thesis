import { promises as fs } from 'fs';
import formidable from 'formidable';
import path from 'path';

// Prevent automatic body parsing
export const config = {
  api: {
    bodyParser: false,
  },
};

const uploadDir = path.resolve(process.cwd(), 'public/uploads'); // เปลี่ยนไปที่ public/uploads


export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const form = formidable({ keepExtensions: true, uploadDir });

  // Ensure the upload directory exists
  await fs.mkdir(uploadDir, { recursive: true });

  form.parse(req, async (err, fields, files) => {
    if (err) {
      console.error('Error parsing form:', err);
      return res.status(500).json({ message: 'Error parsing form' });
    }

    console.log('Parsed files:', files); // Log the files object

    const { UserId } = fields; 
    if (!UserId) {
      return res.status(400).json({ message: 'User ID is required' });
    }

    const userUploadDir = path.join(uploadDir, UserId.toString()); // Ensure UserId is a string

    // Ensure the user upload directory exists
    await fs.mkdir(userUploadDir, { recursive: true });

    const file = files.file[0]; // Access the first file in the array
    if (!file || typeof file.newFilename !== 'string') {
      return res.status(400).json({ message: 'File upload failed or filename is missing' });
    }

    const filePath = path.join(userUploadDir, file.newFilename);
    
    try {
      // Move the uploaded file to the desired location
      await fs.rename(file.filepath, filePath);
    } catch (moveError) {
      console.error('Error moving file:', moveError);
      return res.status(500).json({ message: 'Error saving file' });
    }

    return res.status(200).json({
      success: true,
      imageUrl: `/uploads/${UserId}/${file.newFilename}`,
    });
  });
}

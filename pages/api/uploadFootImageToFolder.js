import fs from 'fs';
import path from 'path';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { base64Image, userId, fileName } = req.body;

    if (!base64Image || !userId || !fileName) {
      return res.status(400).json({ success: false, message: 'ข้อมูลไม่ครบถ้วน' });
    }

    try {
      // แปลง Base64 เป็น buffer
      const imageBuffer = Buffer.from(base64Image.split(',')[1], 'base64');

      // กำหนดเส้นทางของโฟลเดอร์เก็บไฟล์
      const folderPath = path.join(process.cwd(), 'public', 'uploads', 'foot_images', userId);
      if (!fs.existsSync(folderPath)) fs.mkdirSync(folderPath, { recursive: true });

      // กำหนดเส้นทางของไฟล์และบันทึกลงไฟล์
      const filePath = path.join(folderPath, fileName);
      fs.writeFileSync(filePath, imageBuffer);

      // ส่งลิงก์สำหรับการเข้าถึงไฟล์ที่เก็บ
      const imageUrl = `/uploads/foot_images/${userId}/${fileName}`;
      res.status(200).json({ success: true, imageUrl });
    } catch (error) {
      console.error('Error saving image:', error);
      res.status(500).json({ success: false, message: 'เกิดข้อผิดพลาดในการจัดเก็บรูปภาพ' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

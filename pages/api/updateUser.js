// pages/api/updateUser.js
import db from './db'; // ปรับเส้นทางตามโครงสร้างโปรเจกต์ของคุณ

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, fullName, gender, age, heightCM, shoeSizeEU, shoeSizeCM, profileImage } = req.body;

    // ตรวจสอบข้อมูลที่จำเป็น
    if (!UserId) {
      return res.status(400).json({ message: 'Missing UserId' });
    }

    try {
      // สร้างและรัน Query สำหรับการอัปเดตผู้ใช้
      const query = `
        UPDATE User 
        SET 
          FullName = ?, 
          Gender = ?, 
          Age = ?, 
          HeightCM = ?, 
          FootSizeEU = ?, 
          FootSizeCM = ?, 
          ProfileImage = ?
        WHERE UserId = ?
      `;
      const values = [
        fullName || null,
        gender || null,
        age || null,
        heightCM || null,
        shoeSizeEU || null,
        shoeSizeCM || null,
        profileImage || null,
        UserId
      ];

      await db.execute(query, values);

      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

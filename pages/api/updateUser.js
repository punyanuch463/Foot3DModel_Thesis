import { parse } from 'cookie';
import db from './db'; // ปรับเส้นทางตามโครงสร้างโปรเจกต์ของคุณ

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // ดึง cookie จาก header
    const cookie = req.headers.cookie;

    // ถ้าไม่มี cookie ให้ return ข้อผิดพลาด
    if (!cookie) {
      return res.status(401).json({ message: 'ไม่พบ session cookie' });
    }

    // ดึงค่า userId จาก session cookie
    const { session: UserId } = parse(cookie);

    // ตรวจสอบว่า UserId มีค่าหรือไม่
    if (!UserId) {
      return res.status(400).json({ message: 'ไม่พบ UserId ใน session' });
    }

    const { fullName, gender, age, heightCM, shoeSizeEU, shoeSizeCM, profileImage } = req.body;

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

      res.status(200).json({ message: 'ผู้ใช้งานถูกเเก้ไขเเล้ว' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'ไม่สามารถเเก้ไขข้อมูลผู้ใช้งาน' });
    }
  } else {
    res.status(405).json({ message: '405 Method Not Allowed' });
  }
}

import db from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, fullName, gender, age, heightCM, shoeSizeEU, shoeSizeCM, profileImage } = req.body;

    // // ตรวจสอบข้อมูลที่จำเป็นทั้งหมด
    // const requiredFields = [ 'ชื่อ-นามสกุล', 'เพศ', 'อายุ', 'ส่วนสูง', 'ขนาดเท้า EU', 'ขนาดเท้า CM'];

    // const missingFields = requiredFields.filter(field => !req.body[field]);

  
    // ตรวจสอบข้อมูลที่จำเป็น
    if (!UserId) {
      return res.status(400).json({ message: 'Missing UserId' });
    }

    try {
      // สร้างและรัน Query สำหรับการอัปเดตผู้ใช้
      const query = `
        UPDATE User 
        SET FullName = ?, Gender = ?, Age = ?, HeightCM = ?, FootSizeEU = ?, FootSizeCM = ?
        WHERE UserId = ?
      `;
      const values = [fullName || null, gender || null, age || null, heightCM || null, shoeSizeEU || null, shoeSizeCM || null, UserId];

      await db.execute(query, values);

      // หากต้องการจัดเก็บรูปโปรไฟล์ในฐานข้อมูล (แนะนำให้จัดเก็บในระบบจัดเก็บไฟล์เช่น AWS S3 และเก็บ URL ในฐานข้อมูล)
      if (profileImage) {
        const updateProfileImageQuery = `
          UPDATE User
          SET ProfileImage = ?
          WHERE UserId = ?
        `;
        const imageValue = profileImage; // สามารถปรับเปลี่ยนตามวิธีการจัดเก็บ
        await db.execute(updateProfileImageQuery, [imageValue, UserId]);
      }

      res.status(200).json({ message: 'User updated successfully' });
    } catch (error) {
      console.error('Error updating user:', error);
      res.status(500).json({ message: 'Error updating user' });
    }
  } else {
    res.status(405).json({ message: 'Method Not Allowed' });
  }
}

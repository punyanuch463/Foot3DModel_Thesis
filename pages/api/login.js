// pages/api/login.js

import db from './db'; // สมมติว่ามีไฟล์ db.js ที่เชื่อมกับ MySQL

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, usernameOrEmail, UserPassWord } = req.body;

    console.log('Received login request:', { UserId, usernameOrEmail, UserPassWord });

    try {
      // ตรวจสอบผู้ใช้โดยใช้ username หรือ email และ password
      const [user] = await db.execute(
        `SELECT * FROM User 
         WHERE (UserEmail = ? OR UserName = ?) 
         AND UserPassWord = ?`,
        [usernameOrEmail, usernameOrEmail, UserPassWord]
      );

      console.log('User records found:', user);

      if (user.length === 0) {
        console.warn('No matching user found or password incorrect.');
        return res.status(400).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
      }
      return res.status(200).json({ UserId: user[0].UserId }); // ส่งกลับ UserId ของผู้ใช้
  
      // return res.status(200).json({ message: 'เข้าสู่ระบบสำเร็จ!', user: user[0] });
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'เกิดข้อผิดพลาดในระบบ' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} ไม่ได้รับอนุญาต`);
  }
}

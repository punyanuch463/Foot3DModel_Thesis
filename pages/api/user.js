// pages/api/users.js

import db from './db'; // นำเข้าการเชื่อมต่อจาก /api/db.js

export default async function handler(req, res) {
  if (req.method === 'GET') {
    try {
      // Query ดึงข้อมูลจากตาราง User
      const [users] = await db.query('SELECT * FROM User');

      // ส่งข้อมูลกลับในรูป JSON
      res.status(200).json(users);
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Error fetching users' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}

import { serialize } from 'cookie';

export default function handler(req, res) {
  if (req.method === 'POST') {
    const { userId } = req.body;

    // ตรวจสอบว่ามี userId ถูกส่งมาหรือไม่
    if (!userId) {
      return res.status(400).json({ message: 'UserId is required' });
    }

    // สร้าง HTTP-only cookie ที่เก็บ userId เป็น session
    res.setHeader('Set-Cookie', serialize('session', userId, {
      httpOnly: true, // ป้องกันการเข้าถึงคุกกี้จาก JavaScript
      secure: process.env.NODE_ENV === 'production', // ใช้ secure ใน production เท่านั้น
      maxAge: 60 * 60 * 24, // อายุคุกกี้ 1 วัน (ในวินาที)
      path: '/', // ทำให้คุกกี้ใช้ได้ทั่วทั้งโดเมน
    }));

    return res.status(200).json({ message: 'Session created' });
  }

  // ถ้า method ไม่ใช่ POST
  return res.status(405).json({ message: 'Method not allowed' });
}

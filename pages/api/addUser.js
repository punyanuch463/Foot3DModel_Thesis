import db from './db';
import nodemailer from 'nodemailer';

// ฟังก์ชันในการสร้างรหัสยืนยันแบบสุ่ม
const generateCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // สุ่มรหัส 6 หลัก
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserName, UserPassWord, UserEmail, PhoneNumber } = req.body;

    // ตรวจสอบฟิลด์ที่จำเป็น
    if (!UserName || !UserPassWord || !UserEmail) {
      return res.status(400).json({ message: 'Missing required fields' });
    }

    // ตรวจสอบรูปแบบอีเมล
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(UserEmail)) {
      return res.status(400).json({ message: 'Invalid email format' });
    }

    // ตรวจสอบความยาวรหัสผ่าน
    if (UserPassWord.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters long' });
    }

    // Hash รหัสผ่านก่อนเก็บ (แนะนำให้ใช้ bcrypt หรือ library อื่นๆ)
    // ตัวอย่างใช้ bcrypt
    // const bcrypt = require('bcrypt');
    // const saltRounds = 10;
    // const hashedPassword = await bcrypt.hash(UserPassWord, saltRounds);

    const connection = await db.getConnection(); // สมมติว่า db.getConnection() คืนค่า Promise ของการเชื่อมต่อ

    try {
      // เริ่ม Transaction
      await connection.beginTransaction();

      // ตรวจสอบว่ามีผู้ใช้ที่มีอีเมลเดียวกันหรือไม่
      const [existingUsers] = await connection.execute('SELECT * FROM User WHERE UserEmail = ?', [UserEmail]);
      if (existingUsers.length > 0) {
        await connection.rollback();
        return res.status(400).json({ message: 'Email already exists' });
      }

      // เพิ่มผู้ใช้ใหม่ในตาราง User
      const insertUserQuery = `
        INSERT INTO User (UserName, UserPassWord, UserEmail, PhoneNumber) 
        VALUES (?, ?, ?, ?)
      `;
      const userValues = [UserName, UserPassWord, UserEmail, PhoneNumber || null];
      const [userResult] = await connection.execute(insertUserQuery, userValues);
      const newUserId = userResult.insertId;

      // สร้างรหัสยืนยันและวันหมดอายุ
      const verificationCode = generateCode();
      const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 1 ชั่วโมงจากนี้

      // เพิ่มรายการยืนยันในตาราง EmailVerification
      const insertVerificationQuery = `
        INSERT INTO EmailVerification (UserId, VerificationCode, ExpirationDate, Verified)
        VALUES (?, ?, ?, FALSE)
      `;
      await connection.execute(insertVerificationQuery, [newUserId, verificationCode, expirationDate]);

      // ส่งอีเมลยืนยัน
      const transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: process.env.EMAIL_USER, // อีเมลของคุณ
          pass: process.env.EMAIL_PASS, // รหัสผ่านแอป Gmail
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER,
        to: UserEmail,
        subject: 'Email Verification',
        text: `Hello ${UserName},\n\nYour verification code is: ${verificationCode}\n\nThis code will expire in 1 hour.\n\nThank you!`,
      };

      await transporter.sendMail(mailOptions);

      // หากทุกอย่างสำเร็จ ให้ Commit Transaction
      await connection.commit();

      res.status(201).json({ message: 'User registered successfully. Verification email sent.', UserId: newUserId });
    } catch (error) {
      // ในกรณีที่เกิดข้อผิดพลาด ให้ Rollback Transaction
      await connection.rollback();
      console.error('Error during user registration and email verification:', error);
      res.status(500).json({ message: 'Internal server error', error: error.message });
    } finally {
      // ปลดการเชื่อมต่อ
      connection.release();
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

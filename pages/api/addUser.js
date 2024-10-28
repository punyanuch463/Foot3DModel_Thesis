import db from './db';
import nodemailer from 'nodemailer';
import bcrypt from 'bcrypt';

// ฟังก์ชันในการสร้างรหัสยืนยันแบบสุ่ม
const generateCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // สุ่มรหัส 6 หลัก
};


// ฟังก์ชันในการตรวจสอบความแข็งแกร่งของรหัสผ่าน
const isStrongPassword = (password) => {
  const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return strongPasswordRegex.test(password);
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
    if (!isStrongPassword(UserPassWord)) {
      return res.status(400).json({ message: 'รหัสผ่านต้องมีความยาวอย่างน้อย 8 ตัวอักษร และรวมตัวอักษรใหญ่ ตัวอักษรเล็ก ตัวเลข และสัญลักษณ์พิเศษ' });
    }

    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(UserPassWord, saltRounds);

    const connection = await db.getConnection(); // สมมติว่า db.getConnection() คืนค่า Promise ของการเชื่อมต่อ

    try {
      // เริ่ม Transaction
      await connection.beginTransaction();

      // ตรวจสอบว่ามีผู้ใช้ที่มีอีเมลเดียวกันหรือไม่
      const [existingUsers] = await connection.execute('SELECT * FROM User WHERE UserEmail = ?', [UserEmail]);
      if (existingUsers.length > 0) {
        await connection.rollback();
        return res.status(400).json({ message: 'คุณมีอีเมลอยู่ในระบบ กรุณาใช้อีเมลใหม่ หรือ เข้าสู่ระบบ' });
      }

      // เพิ่มผู้ใช้ใหม่ในตาราง User
      const insertUserQuery = `
        INSERT INTO User (UserName, UserPassWord, UserEmail, PhoneNumber) 
        VALUES (?, ?, ?, ?)
      `;
      const userValues = [UserName, hashedPassword, UserEmail, PhoneNumber || null];
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
        subject: 'การยืนยันอีเมล',
        text: `สวัสดี ${UserName} ค่ะ,\n\nรหัสการยืนยันของคุณคือ: ${verificationCode}\n\nรหัสนี้จะหมดอายุใน 1 ชั่วโมง.\n\nขอบคุณค่ะ!`,
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

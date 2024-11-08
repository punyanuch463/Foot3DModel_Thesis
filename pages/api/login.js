
import db from './db'; // Assuming db.js connects to MySQL
import bcrypt from 'bcrypt'; // Import bcrypt for password hashing

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { usernameOrEmail, UserPassWord } = req.body;

    console.log('Received login request:', { usernameOrEmail, UserPassWord });

    try {
      // Fetch user by username or email
      const [users] = await db.execute(
        `SELECT * FROM User 
         WHERE UserEmail = ? OR UserName = ?`,
        [usernameOrEmail, usernameOrEmail]
      );

      console.log('User records found:', users);

      if (users.length === 0) {
        console.warn('No matching user found.');
        return res.status(400).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
      }

      const user = users[0];

      // Compare the provided password with the hashed password
      const isPasswordValid = await bcrypt.compare(UserPassWord, user.UserPassWord);

      if (!isPasswordValid) {
        console.warn('Password incorrect.');
        return res.status(400).json({ message: 'ชื่อผู้ใช้หรือรหัสผ่านไม่ถูกต้อง' });
      }

      // Password is valid; return user details
      return res.status(200).json({
        UserId: user.UserId,
        UserEmail: user.UserEmail // Return email as well
      });
      
    } catch (error) {
      console.error('Error during login:', error);
      return res.status(500).json({ message: 'เกิดข้อผิดพลาดในระบบ' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} ไม่ได้รับอนุญาต`);
  }
}



import db from './db';
import nodemailer from 'nodemailer';

// Function to generate a random 6-character alphanumeric code
const generateCode = () => {
  return Math.random().toString(36).substring(2, 8).toUpperCase(); // สุ่มรหัส 6 หลัก
};

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, code } = req.body;

    if (code) {
      // Handle verification of the code
      try {
        // Fetch the latest verification record for the user with the provided code
        const [verificationRecords] = await db.execute(
          'SELECT * FROM EmailVerification WHERE UserId = ? AND VerificationCode = ? AND Verified = FALSE AND ExpirationDate > NOW() ORDER BY VerificationID DESC LIMIT 1',
          [UserId, code]
        );

        if (verificationRecords.length === 0) {
          return res.status(400).json({ error: 'Incorrect or expired verification code.' });
        }

        // Mark the verification as completed
        await db.execute(
          'UPDATE EmailVerification SET Verified = TRUE WHERE VerificationID = ?',
          [verificationRecords[0].VerificationID]
        );

        return res.status(200).json({ message: 'Verification successful!' });
      } catch (error) {
        console.error('Error verifying code:', error);
        return res.status(500).json({ error: 'Internal server error.' });
      }
    } else if (UserId) {
      // Handle sending the verification email
      try {
        // Fetch the user's email from the User table
        const [users] = await db.execute('SELECT UserEmail FROM User WHERE UserId = ?', [UserId]);
        if (users.length === 0) {
          return res.status(404).json({ message: 'ไม่พบผู้ใช้งาน.' });
        }
        const userEmail = users[0].UserEmail;

        // Generate a verification code
        const verificationCode = generateCode();

        // Set expiration date (e.g., 1 hour from now)
        const expirationDate = new Date(Date.now() + 60 * 60 * 1000); // 1 hour

        // Insert the verification code into the EmailVerification table
        const insertQuery = `
          INSERT INTO EmailVerification (UserId, VerificationCode, ExpirationDate, Verified)
          VALUES (?, ?, ?, FALSE)
        `;
        await db.execute(insertQuery, [UserId, verificationCode, expirationDate]);

        // Send the verification email using nodemailer
        const transporter = nodemailer.createTransport({
          service: 'Gmail',
          auth: {
            user: process.env.EMAIL_USER, // Your Gmail address
            pass: process.env.EMAIL_PASS, // Your Gmail app password
          },
        });

        const mailOptions = {
          from: process.env.EMAIL_USER,
          to: userEmail,
          subject: 'Verification Code',
          text: `Your verification code is: ${verificationCode}`,
        };

        await transporter.sendMail(mailOptions);

        return res.status(200).json({ message: 'Verification email sent successfully!' });
      } catch (error) {
        console.error('Error sending verification email:', error.message);
        return res.status(500).json({ error: 'ส่งอีเมลไม่ได้.' });
      }
    } else {
      return res.status(400).json({ error: 'ต้องการ userid หรือ verify code' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`405 ${req.method} Not Allowed`);
  }
}

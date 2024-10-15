// pages/api/verifyCode.js

import db from './db';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { UserId, code } = req.body;

    console.log('Received verification request:', { UserId, code });

    // ตรวจสอบว่ามี UserId และ code หรือไม่
    if (!UserId || !code) {
      console.warn('Missing UserId or code in the request body.');
      return res.status(400).json({ error: 'กรุณากรอก Verification Code  .' });
    }

    // // ตรวจสอบว่า UserId เป็นตัวเลข
    // if (typeof UserId !== 'number') {
    //   console.warn('Invalid UserId type:', UserId);
    //   return res.status(400).json({ error: 'UserId must be a number.'});
    // }

    try {
      const [verificationRecords] = await db.execute(
        `SELECT * FROM EmailVerification 
         WHERE UserId = ? AND VerificationCode = ? 
          `,
        [UserId, code]
      );

      console.log('Verification records found:', verificationRecords);

      if (verificationRecords.length === 0) {
        console.warn('No matching verification records found.');
        return res.status(400).json({ error: ' Verification code ไม่ถูกต้องหรือหมดอายุ.' });
      }

      return res.status(200).json({ message: 'Verification successful!' });
    } catch (error) {
      console.error('Error verifying code:', error);
      return res.status(500).json({ error: 'Internal server error .' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`405 ${req.method} Not Allowed`);
  }
}

// pages/api/user.js
import db from './db'; // Adjust the path according to your project structure

export default async function handler(req, res) {
  if (req.method === 'GET') {
    const { UserId } = req.query;

    if (!UserId) {
      return res.status(400).json({ message: "UserId is required." });
    }

    // Fetch user data logic for GET
    try {
      const userData = await db.query('SELECT * FROM User WHERE UserId = ?', [UserId]);
      if (userData.length === 0) {
        return res.status(404).json({ message: "User not found." });
      }
      console.log("testGet" + userData[0]);
      return res.status(200).json(userData[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else if (req.method === 'POST') {
    const { UserId } = req.body;

    if (!UserId) {
      return res.status(400).json({ message: "UserId is required." });
    }

    // Fetch user data logic for POST
    try {
      const userData = await db.query('SELECT * FROM User WHERE UserId = ?', [UserId]);
      if (userData.length === 0) {
        return res.status(404).json({ message: "User not found." });
      }
      console.log("testPost" , userData[0]);
      return res.status(200).json(userData[0]);
    } catch (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal server error." });
    }
  } else {
    // Handle other methods (if any)
    res.setHeader('Allow', ['GET', 'POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}

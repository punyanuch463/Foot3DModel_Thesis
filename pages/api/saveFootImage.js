// pages/api/saveFootImage.js
import db from './db'; // Import the database connection

export default async function handler(req, res) {



  if (req.method === 'POST') {
    const { imageCategoryId, side, pathUrl } = req.body;

    if (!imageCategoryId || !side || !pathUrl) {
      return res.status(400).json({ error: 'All fields are required' });
    }

    try {
      // Insert a new record into the FootImage table
      const [result] = await db.execute(
        'INSERT INTO FootImage (ImageCategoryID, Side, PathUrl) VALUES (?, ?, ?)',
        [imageCategoryId, side, pathUrl]
      );

      // Return the result with the new image ID
      res.status(200).json({ message: 'Image saved successfully', id: result.insertId });
    } catch (error) {
      console.error('Error saving image:', error);
      res.status(500).json({ error: 'Error saving image' });
    }
  } else {
    res.status(405).json({ error: 'Method not allowed' });
  }
}

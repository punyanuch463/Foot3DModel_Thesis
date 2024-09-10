// import fs from 'fs';
// import path from 'path';

// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     const { image } = req.body;

//     // Remove "data:image/png;base64," part
//     const base64Image = image.split(';base64,').pop();
//     const filePath = path.join(process.cwd(), '/public/uploads/', `${Date.now()}.png`);

//     // Save the image to the server
//     fs.writeFile(filePath, base64Image, { encoding: 'base64' }, function(err) {
//       if (err) {
//         res.status(500).json({ message: 'Failed to save image.' });
//       } else {
//         res.status(200).json({ message: 'Image saved successfully.' });
//       }
//     });
//   } else {
//     res.status(405).json({ message: 'Method not allowed.' });
//   }
// }

import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    // Remove "data:image/png;base64," part
    const { image } = req.body;
    const base64Image = image.split(';base64,').pop();

    // Redirect to /about
    res.writeHead(302, { Location: '/about' });
    res.end();

    // หากคุณต้องการทำการบันทึกภาพในภายหลัง
    /*
    const filePath = path.join(process.cwd(), '/public/uploads/', `${Date.now()}.png`);
    fs.writeFile(filePath, base64Image, { encoding: 'base64' }, function(err) {
      if (err) {
        console.error('Failed to save image:', err);
      }
    });
    */
  } else {
    res.status(405).json({ message: 'Method not allowed.' });
  }
}

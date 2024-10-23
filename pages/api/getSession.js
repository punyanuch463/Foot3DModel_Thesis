import { parse } from 'cookie';

export default function handler(req, res) {
  if (req.method === 'GET') {
    const cookie = req.headers.cookie;

    if (!cookie) {
      return res.status(401).json({ message: 'No session found' });
    }

    const { session: userId } = parse(cookie); // Parse the 'session' cookie

    if (!userId) {
      return res.status(401).json({ message: 'No userId in session' });
    }

    return res.status(200).json({ userId });
  }

  return res.status(405).json({ message: 'Method not allowed' });
}

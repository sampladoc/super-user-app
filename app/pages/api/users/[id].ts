// pages/api/users/[id].ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getUserById } from '../../../controllers/UserController';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const userId = parseInt(req.query.id as string);

  if (req.method === 'GET') {
    // Get user by ID
    const user = getUserById(userId);
    if (user) {
      res.status(200).json(user);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } else if (req.method === 'PUT') {
    // Update user by ID (not implemented in this example)
    res.status(501).json({ message: 'Not implemented' });
  } else if (req.method === 'DELETE') {
    // Delete user by ID (not implemented in this example)
    res.status(501).json({ message: 'Not implemented' });
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}

// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';
import { getAllUsers, getUserById } from '../../controllers/UserController';

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    // Get all users
    const users = getAllUsers();
    res.status(200).json(users);
  } else if (req.method === 'POST') {
    // Create a new user (not implemented in this example)
    res.status(501).json({ message: 'Not implemented' });
  } else {
    // Handle unsupported methods
    res.status(405).json({ message: 'Method not allowed' });
  }
}

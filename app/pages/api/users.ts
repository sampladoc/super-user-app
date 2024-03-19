// pages/api/users.ts
import { NextApiRequest, NextApiResponse } from 'next';

type User = {
  id: number;
  name: string;
  relationship: string;
};

const users: User[] = [
  { id: 1, name: 'John Doe', relationship: 'Friend' },
  { id: 2, name: 'Jane Smith', relationship: 'Family' },
  // Add more users here
];

export default function handler(req: NextApiRequest, res: NextApiResponse<User[]>) {
  res.status(200).json(users);
}

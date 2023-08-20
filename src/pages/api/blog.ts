import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
  const blogs = await response.data;
  res.status(200).json({ message: 'success', blogs });
}

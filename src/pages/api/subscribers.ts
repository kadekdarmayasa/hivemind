import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    if (req.method === 'POST') {
      const { email } = req.body;
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`, {
        email,
      });
      res.status(response.status).json({ message: 'Subscribed successfully' });
    }

    if (req.method === 'GET') {
      const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`);
      const { subscribers } = await response.data;
      res.status(response.status).json({ subscribers });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

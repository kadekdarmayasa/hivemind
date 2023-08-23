import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    switch (req.method) {
      case 'POST':
        {
          const { page } = req.body;
          const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/blogs`, { page });
          const blogs = await response.data.blogs;
          res.status(200).json({ message: 'success', blogs, hasMore: response.data.hasMore });
        }
        break;
      default: {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blogs`);
        const blogs = await response.data.blogs;
        res.status(200).json({ message: 'success', blogs });
      }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

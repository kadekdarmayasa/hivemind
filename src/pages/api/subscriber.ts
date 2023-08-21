import axios from 'axios';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') postHandler(req, res);
  else getHandler(req, res);
}

async function postHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const { email } = req.body;
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`, { email });

    if (response.status === 201) {
      res.status(response.status).json({ message: response.data.message });
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/subscribers`);
    const subscribers = await response.data;

    res.status(200).json({ subscribers });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
}

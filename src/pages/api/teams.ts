import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
    const teams = await response.data.teams;
    res.status(200).json({ teams });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

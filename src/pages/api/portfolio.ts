import { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { page, serviceId } = req.body;
  const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/portfolios`, {
    page,
    serviceId,
  });
  const data = await response.data;
  res.status(200).json({
    portfolios: data.portfolios,
    hasMore: data.hasMore,
  });
}

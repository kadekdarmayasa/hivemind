import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/teams`);
  const teams = await data.json();
  res.status(200).json({ message: 'success', teams });
}

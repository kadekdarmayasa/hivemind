import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const data = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/homepage`);
  const { clients, services, portfolios, testimonies, blogs } = await data.json();
  res.status(200).json({
    message: 'success',
    homepage: {
      clients,
      services,
      portfolios,
      testimonies,
      blogs,
    },
  });
}

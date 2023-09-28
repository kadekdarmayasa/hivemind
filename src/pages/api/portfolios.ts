import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { page, serviceId } = req.body;
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/portfolios`,
      {
        page,
        serviceId,
      }
    );
    const { data } = await response.data;
    const { portfolios, hasMore } = data;
    res.status(200).json({ portfolios, hasMore });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

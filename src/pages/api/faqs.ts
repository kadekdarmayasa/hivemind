import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const response = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/faqs`);
    const { data } = await response.data;
    res.status(200).json({ faqs: data.faqs });
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    res.status(error.response?.status || 500).json({ message: error.message });
  }
}

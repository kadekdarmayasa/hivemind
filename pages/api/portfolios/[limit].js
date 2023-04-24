import path from "path";
import { promises as fs } from 'fs';

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function handler(req, res) {
  try {
    const { limit } = req.query;
    if (limit) {
      const jsonDirectory = path.join(process.cwd(), 'json');
      const fileContents = await fs.readFile(jsonDirectory + '/portfolios.json', 'utf8');
      res.status(200).send(fileContents);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
}
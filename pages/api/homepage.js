import path from "path";
import { promises as fs } from 'fs';

/**
 * 
 * @param {import("next").NextApiRequest} req 
 * @param {import("next").NextApiResponse} res 
 */
export default async function handler(req, res) {
  const jsonDirectory = path.join(process.cwd(), 'json');
  const fileContents = await fs.readFile(jsonDirectory + '/homepage.json', 'utf8');
  res.status(200).send(fileContents);
}
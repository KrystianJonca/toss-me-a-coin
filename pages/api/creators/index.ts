import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function creatorsHandler(req: NextApiRequest, res: NextApiResponse) {
  const name = req.body.name;

  try {
    if (!name) {
      const creators = await prisma.creator.findMany();

      res.status(200).json(creators);
    } else {
      const creators = await prisma.creator.findMany({ where: { name } });

      res.status(200).json(creators);
    }
  } catch (error) {
    res.send(error);
  }
}

import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function creatorHandler(req: NextApiRequest, res: NextApiResponse) {
  const address = req.query.address as string;

  try {
    const creator = await prisma.creator.findUnique({ where: { ethAddress: address } });

    if (creator) {
      res.status(200).json(creator);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.send(error);
  }
}

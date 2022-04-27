import type { NextApiRequest, NextApiResponse } from 'next';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function creatorHandler(req: NextApiRequest, res: NextApiResponse) {
  const { method } = req;

  try {
    const data = req.body;

    if (!data.username)
      res.status(400).json({ message: 'Please provide the username and other data if necessary' });

    switch (method) {
      case 'GET':
        const creator = await prisma.creator.findUnique({ where: { username: data.username } });

        if (creator) {
          res.status(200).json(creator);
        } else {
          res.status(404).json({ message: 'User not found' });
        }
        break;
      case 'POST':
        const createCreator = await prisma.creator.create({ data: { ...data } });

        res.status(200).json(createCreator);
        break;
      case 'PUT':
        const updateCreator = await prisma.creator.update({
          where: { username: data.username },
          data: { ...data },
        });

        res.status(200).json(updateCreator);
        break;
      case 'DELETE':
        const deleteCreator = await prisma.creator.delete({ where: { username: data.username } });

        res.status(200).json(deleteCreator);
        break;
      default:
        break;
    }
  } catch (error) {
    res.send(error);
  }
}

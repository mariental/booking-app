import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const accommodations = await prisma.room.findFirst({
        where: {
            id: req.query 
        },
        include: {
            accommondation: {
                select: {
                    address: true
                }
            }
        }
    })
    res.json(accommodations)
}
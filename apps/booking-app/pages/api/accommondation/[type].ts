import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '../../../lib/prisma';

export default async function handle(req: NextApiRequest, res: NextApiResponse) {
    const accommodations = await prisma.accommodation.findMany({
        include: {
            address: true,
            images: true,
            rooms: true,
            ratings: true,
            facilities: true
        },
        where: {
            type: {
                name: req.query.type.toString()
            }
        },
    })
    res.json(accommodations)
}
import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    try {
        const reviews = await prisma.review.findMany({
            where: {
                authorId: {
                    equals: Number(req.query.userId)
                }
            },
            include: {
                author: true,
                reservation: {
                    include: {
                        roomOption: {
                            select: {
                                room: {
                                    select: {
                                        name: true,
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        return res.status(200).json(reviews);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

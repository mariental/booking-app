import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    try {
        const reservations = await prisma.reservation.findMany({
            where: {
                userId: {
                    equals: Number(req.query.userId)
                }
            },
            include: {
                roomOption: {
                    include: {
                        room: {
                            include: {
                                accommondation: {
                                    select: {
                                        name: true
                                    }
                                }
                            }
                        }
                    }
                }
            }
        });
        return res.status(200).json(reservations);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

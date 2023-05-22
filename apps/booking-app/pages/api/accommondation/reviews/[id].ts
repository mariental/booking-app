import prisma from "apps/booking-app/lib/prisma"

export default async function handle(req, res) {
    const acc = await prisma.accommodation.findFirst({
        where: {
            id: req.id,
        },
        include: {
            reviews: {
                include: {
                    author: true,
                    reservation: {
                        include: {
                            roomOption: {
                                select: {
                                    room: {
                                        select: {
                                            name: true
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            },
            facilities: true
        }
    })
    res.json(acc.reviews);
}


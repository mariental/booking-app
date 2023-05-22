import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const acc = await prisma.accommodation.findFirst({
        where: {
            id: req.id,
        },
        select: {
            rooms: {
                include: {
                    images: true,
                    beds: {
                        include: {
                            bed: true
                        }
                    },
                    facilities: true,
                    roomOptions: {
                        include: {
                            cancellationType: true,
                            mealType: true
                        }
                    }
                }
            },
        }
    })
    res.json(acc.rooms);
}

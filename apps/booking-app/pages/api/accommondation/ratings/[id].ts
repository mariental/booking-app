import prisma from "apps/booking-app/lib/prisma"

export default async function handle(req, res) {
    const acc = await prisma.accommodation.findFirst({
        where: {
            id: req.id,
        },
        include: {
            ratings: true 
        }
    })
    res.json(acc.ratings);
}


import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const user = await prisma.user.findFirst({
        where: {
            email: req.query.email
        },
        include: {
            reviews: true,
            reservations: true,
            favorites: true
        }
    });
    return res.json(user);
}

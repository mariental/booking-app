import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    try {
        const reservation = await prisma.reservation.findUnique({
            where: {
                id: req.id
            }
        });
        return res.status(200).json(reservation);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
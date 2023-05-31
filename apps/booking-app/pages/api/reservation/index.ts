import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { checkInDate, checkOutDate, roomOptions, adults, kids, userId } = JSON.parse(req.body);
    try {
        const reservation = await prisma.reservation.create({
            data: {
                checkInDate: checkInDate,
                checkOutDate: checkOutDate,
                roomOption: {
                    connect: roomOptions
                },
                adults: adults,
                kids: kids,
                userId: userId
            }
        });
        return res.status(200).json(reservation);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

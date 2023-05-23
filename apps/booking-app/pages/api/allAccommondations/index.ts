import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const acc = await prisma.accommodation.findMany({
        include: {
          type: true,
          address: true,
          images: true,
          rooms: {
            include: {
              roomOptions: {
                select: {
                  price: true,
                }
              },
              facilities: true,
              beds: true
            }
          },
          ratings: true,
          facilities: true
        }
      });
    res.json(acc);
}

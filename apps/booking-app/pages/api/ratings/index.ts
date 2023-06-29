import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { name, value, accommondationId } = JSON.parse(req.body);
    try {
        const oldRating = await prisma.rate.findUnique({
            where: {
                rateId: {
                    name: name,
                    accommondationId: accommondationId
                }
            }
        });
        const newValue = Number((((oldRating.value*oldRating.quantity)+value)/(oldRating.quantity+1)).toFixed(2));
        const rating = await prisma.rate.upsert({
            where: {
                rateId: {
                    name: name,
                    accommondationId: accommondationId
                }
            },
            update: {
                value: {
                    set: newValue
                },
                quantity: {
                    increment: 1
                }
            },
            create: {
              name: name,
              value: value,
              quantity: 1,
              accommondationId: accommondationId
            },
          })
        return res.status(200).json(rating);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

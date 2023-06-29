import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { email, accommondationId } = JSON.parse(req.body);
    try {
        const favorite = await prisma.user.update({
            where: {
                email: email,
              },
              data: {
                favorites: {
                    connect: {
                        id: accommondationId
                    }
                }
              },
        });
        return res.status(200).json(favorite);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

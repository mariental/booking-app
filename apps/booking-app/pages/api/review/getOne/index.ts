import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { authorId, accommondationId } = JSON.parse(req.body);
    try {
        const review = await prisma.review.findUnique({
            where: {
                reviewId: {
                    authorId: authorId,
                    accommodationId: accommondationId
                }
            }
        });
        return res.status(200).json(review);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}
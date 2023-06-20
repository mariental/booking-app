import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { title, content, authorId, rate, publicationDate, reservationId, accommondationId } = JSON.parse(req.body);
    try {
        const review = await prisma.review.create({
            data: {
                title: title,
                content: content,
                authorId: authorId,
                rate: rate,
                publicationDate: publicationDate,
                reservationId: reservationId,
                accommodationId: accommondationId
            }
        });
        return res.status(200).json(review);
    } catch (err) {
        return res.status(500).json({error: err.message});
    }
}

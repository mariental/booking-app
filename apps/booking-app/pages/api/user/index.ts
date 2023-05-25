import prisma from "apps/booking-app/lib/prisma";

export default async function handle(req, res) {
    const { name, email } = JSON.parse(req.body);
    const user = await prisma.user.create({
        data: {
            name: name,
            email: email
        }
    });
    return res.json(user);
}

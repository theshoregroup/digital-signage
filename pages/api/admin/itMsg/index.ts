import prisma from "../../../../lib/prisma";

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        // By default assume that we will return all messages
        if (req.query.range) {
           // TODO
        }
        return res.status(200).json(await prisma.itMessage.findMany());
    } else if (req.method === "POST") {
        const { title, message, beginsAt, endsAt, contact } = req.body;
        const newMessage = await prisma.itMessage.create({
            data: {
                title,
                message,
                beginsAt,
                endsAt,
                contact,
            },
        });
        return res.status(200).json(newMessage);
    }
}
import prisma from "../../../../lib/prisma";

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        // TODO: Decide if I want to also have an option to return a scoped list of messages (i.e only IT Messages published between x and y, or only messages that have a certain status)
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
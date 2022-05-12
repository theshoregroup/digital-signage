import prisma from "../../../lib/prisma";

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        // TODO: Decide if I want to also have an option to return a scoped list of clients
        return res.status(200).json(await prisma.clientCookies.findMany());
    } else if (req.method === "POST") {
        const { token } = req.body;
        const newMessage = await prisma.clientCookies.create({
            data: {
                token,
                expires: new Date(Date.now() + 7),
            },
        });
        return res.status(200).json(newMessage);
    }
}
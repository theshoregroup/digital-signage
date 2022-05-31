import prisma from "../../../lib/prisma";

export default async (req: any, res: any) => {
    if (req.method === "GET") {
        if (req.query.uuid) {
            const token = await prisma.clientCookies.findUnique({
                where: {
                    token: req.query.uuid,
                },
            });

            if (token) {
                return res.status(200).json({
                    token: true,
                });
            } else {
                return res.status(404).json({
                    message: "Token not found",
                });
            }
        } else {
            return res.status(404).json(
                "You must provide a token in the query string"
            );
        }
    } else if (req.method === "POST") {
        const { token, officeId } = req.body;
        const newMessage = await prisma.clientCookies.create({
            data: {
                token,
                officeId,
                expires: new Date(Date.now() + 7),
            },
        });
        return res.status(200).json(newMessage);
    }
}
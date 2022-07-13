import prisma from "../../../lib/prisma";

export default async (req: any, res: any) => {
    if (req.method == "GET") {
        return res.status(200).json(await prisma.clientCookies.findMany())
    }
}
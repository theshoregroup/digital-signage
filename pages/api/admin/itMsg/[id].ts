import prisma from "../../../../lib/prisma";

export default async (req: any, res: any) => {
    return res.status(200).json(await prisma.itMessage.findMany());
}
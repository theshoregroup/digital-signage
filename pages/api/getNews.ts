

import prisma from "../../lib/prisma";

export default async (req: any, res: any) => {
    // This grabs IT Messages where the end date is in the future
    const itMessages = await prisma.itMessage.findMany({
        where: {
            endsAt: {
                // Where ends at is GreaTEr Than now (GTE)
                gte: new Date()
            }
        },
    });

    // Add data into an object
    const toSend = {
        itMessage: itMessages,
    };

    return res.status(200).json(toSend);
}

const dummyData = {
    news: [
        {
            title: "News 1 this is a very long title to see how long they can be",
            source: "XYZ"
        },
        {
            title: "News 2",
            source: "This is a news message",
        },
        {
            title: "News 3",
            source: "This is a news message",
        },
        {
            title: "News 4",
            source: "This is a news message",
        },
        {
            title: "News 1 this is a very long title to see how long they can be",
            source: "XYZ"
        },
        {
            title: "News 2",
            source: "This is a news message",
        },
        {
            title: "News 3",
            source: "This is a news message",
        },
        {
            title: "News 4",
            source: "This is a news message",
        },
        {
            title: "News 1 this is a very long title to see how long they can be",
            source: "XYZ"
        },
        {
            title: "News 2",
            source: "This is a news message",
        },
        {
            title: "News 3",
            source: "This is a news message",
        },
        {
            title: "News 4",
            source: "This is a news message",
        },
        {
            title: "News 1 this is a very long title to see how long they can be",
            source: "XYZ"
        },
        {
            title: "News 2",
            source: "This is a news message",
        },
        {
            title: "News 3",
            source: "This is a news message",
        },
        {
            title: "News 4",
            source: "This is a news message",
        },
    ],
};

// This will get a list of news from aggregate sources, plus any 'IT' messages, taken from the database

// IT Messages will look something like:
// model itMessage {
//   id         String @id @default (cuid())
//     type String
//   message    String
//   createdAt  DateTime @default (now())
//   beginsAt   DateTime @default (now())
//   endsAt     DateTime
//   contact    String @default ("it@theshoregroup.co.uk")
// }

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
        news: dummyData.news, //Currently just dummy data (above)
        itMessage: itMessages,
    };

    return res.status(200).json(toSend);
}

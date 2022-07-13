import prisma from "../../lib/prisma";
// @ts-ignore
import NewsAPI from 'newsapi';

const newsapi = new NewsAPI(process.env.NEWSAPI_KEY);

export default async (req: any, res: any) => {
    if (req.method === 'GET') {
        // ? Default news fetcher

        // const scopedSources = await prisma.offices.findUnique({
        //     where: {
        //         id: req.query.officeId
        //     },
        //     select: {
        //         SelectedNewsSources: true
        //     }
        // });


        // Add any other global sources (defined from isGlobalSource on newsQueries)
        const globalSources = await prisma.newsQuery.findMany({
            where: {
                isGlobalSource: true
            },
        })

        const sources = [...globalSources]

        // Time to fetch some news!
        let news = []

        for (let i = 0; i < sources.length; i++) {
            // Fetch the news from the source
            const currentSource = sources[i]

            const currentCall = await newsapi.v2[currentSource.endpoint]({
                q: currentSource.query,
                language: currentSource.language ? currentSource.language : 'en',
                domains: currentSource.domains ? currentSource.domains : null,
                country: 'gb'
            })

            news[i] = currentCall

        }

        // ! TEMPOARY SOLUTION
        news = news[0]


        // ! So the problem is that fetching all this is EXPENSIVE! 400ms/req.
        // * Idea: Use a cache to store the news in, and only fetch it if it's not in the cache

        return res.status(200).json(news)

    }
}

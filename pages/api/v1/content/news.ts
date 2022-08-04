export default async function NewsApi(req: any, res: any) {
    // News fetcher
    // API key available @ process.env.NEWSDATA_KEY
    const rootURL = 'https://newsdata.io'

    const options = [
        {
            country: 'gb'
        }
    ]

    async function externalApiCall(options: any) {
        const link = `${rootURL}/api/1/news?apiKey=${process.env.NEWSDATA_KEY}&country=gb`

        const response = await fetch(link)
            .then(response => Promise.all([response, response.json()]))
            .catch((function (err) {
                console.log('ERROR - unable to fetch news, response >' + '/n' + err)
            }))
        return await response
        
    }

    const body = await externalApiCall(options)

    return res.status(200).json(body)
}
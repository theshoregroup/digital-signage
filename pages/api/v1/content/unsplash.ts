export default async function Unsplash(req, res) {
    // This API proxies req's to Unsplash - this is done server side in order to not expose our API key as per Unsplash guidelines - see https://www.npmjs.com/package/unsplash-js

    
    const key = process.env.UNSPLASH_KEY

    console.log(process.env)

    const fetchOptions = {
        method: 'GET',
        Headers: {
            
        }
    }
    const Url = `https://api.unsplash.com/photos?page=1`

    const response = await fetch(Url, {
        method: 'GET',
        headers: new Headers({
            'Authorization': `Client-ID ${key}`
        })
    }).then((repl) => {
        if (repl.status == 200) {
            // Everything is good!
            
        }
    })

    return res.status(200).json(response.status)
}
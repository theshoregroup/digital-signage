// Imports
import parser from "../functional/Parser";

export default function Marquee(props) {
    // Available props
    // .type - will be a string of either "rss", "json", "text" or default (renders without content)
    // .content will be either an object or an array

    // .type expected behaviour is to match to one of the switch cases below.

    // .content expected behaviour is:
    // if object (will be selected if rss, json)
    // .provider - will be a string
    // .feedUrl - will be a string
    // .schema - will be a string
    // .apiKey - optional. will be a string
    // ============================================================
    // if array (will be selected if text)
    // Will be array of text

    function getContent() {
        switch (props.type) {
            case 'rss':
                // This will accept a RSS feed (predefined schema) and return a JSON array of the feed
                return parser(props.content.feedUrl, props.content.schema);
            case 'json':
                // This will accept a JSON feed (predefined schema) and return a JSON array of the feed
                return parser(props.content.feedUrl, props.content.schema);
            case 'text':
                console.log(props.content);
                return props.content;
            default:
                console.warn('Marquee type not recognised');
                return null;
        }
    }

    const arrayOfContent = getContent();

    return (
        // Disables ES-Lint warning about the use of <marquee>
        // eslint-disable-next-line
        <marquee behavior="scroll" direction="left" scrollamount="10" scrolldelay="10">
            {arrayOfContent.map((content) => (
                <span className="p-2" dangerouslySetInnerHTML={{__html: content}}/>
            ))}
        </marquee>
    )

}
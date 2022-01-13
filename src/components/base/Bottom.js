import Marquee from "../subcomponents/Marquee"


export default function Bottom(props) {
    // Define props
    const elementType = props.elementType || 'marquee' // i.e 'marquee' | This should eventially use JS React Use State to be able to change on-fly
    const elementContent = props.content || {
        // This is passed through to the subcomponent.
        // This is an example used for testing, remove for release.
        'type': 'text',
        'data': [ 
           " one",
            "two",
           " three",
        ]
    }

    


    switch (elementType) {
        case 'marquee':
            // This will display ../functional/Marquee.js
            // elementContent should be passed through to this (refrenced above)

            return <Marquee type={elementContent.type} content={elementContent.data} />
        default:
            return <div>No element selected</div>
    }

    

}
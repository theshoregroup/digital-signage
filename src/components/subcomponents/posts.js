//ANIMATION TEST
import React                       from "react";
import TextTransition, { presets } from "react-text-transition";

const post = [

    "The Big news this week coming from Chris Ransom with the Winvic purchase order confirmation. This is potentially an enormous win for the group, so fair play to Chris with the support of Will for getting this one over the line. Chloe May and Adam Miller have come back with strong figures, Lola has received loads of orders this week and Dan Branch has received some positive news with regards to a new huge project with McLaren. Ross Donnelly has done a fantastic job with the help of Will in gaining us access to the Osbourne PSL, and I’m led to believe that Ian and Will have some positive meetings coming up with both Kier and Bloor Homes, so on the whole I’m really pleased.",
  
    "Feedback from Dan and the team is that business levels remain very positive and we’re predicting a very busy year ahead. The challenges will remain the lack of labour, but the team are doing their best and it’s important that the whole group continue to support the retail division. All worker referrals are very welcome, so if anyone has any family or friends looking for additional work please let the retail team know. ",

    "Fantastic week for team with the news that we have won an additional 2 Data Centre projects with T Clarke. In addition we have been asked to tender for one of Overbury’s largest projects in London, so I can’t be any happier with progress.",

    "Chloe P looks like she’s going to have a very positive start to the week with one of her clients potentially taking on two of her candidates. Ross looks like he’s finally got one of his retained search assignments finally over the line, and the pipe line is looking very strong. ,",
  
    "Back office, Resourcing, and compliance teams as always have been brilliant this week, and big thanks to Lily Pryke who is currently doing the work of 2 if not 3 people. ",
];


export const Anim = () => {
    const [index, setIndex] = React.useState(0);
  
    React.useEffect(() => {
      const intervalId = setInterval(() =>
        setIndex(index => index + 1),
        10000 // every 3 seconds
      );
      return () => clearTimeout(intervalId);
    }, []);
  
    return (
      <h1>
        <TextTransition
          text={ post[index % post.length] }
          springConfig={ presets.wobbly }
        />
      </h1>
    );
  };
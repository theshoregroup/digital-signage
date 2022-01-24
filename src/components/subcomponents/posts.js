//ANIMATION TEST
import React from "react";
import TextTransition, { presets } from "react-text-transition";

const post = [
  "The new software at Boost is now fully operational and delivering real benefits to us and to operatives. This includes the operative portal and on-line signing, which should be fully live in the next couple of weeks. Numbers outside of The Shore Group are very strong at the moment, and improving each week, which is very encouraging.  Great work Eileen, Steve, Andy and Team.",
  "We now have a significant amount work formally allocated for 2022, and are working hard to secure staff to fill the roles – there is further potential for additional work, if we can secure more retail operatives! This year we will be working with most of the major retailers,",
  "The team are already ahead of budget, with a strong start to the year from Overbury, Loughtons and GBE among others, and the activity levels are clearly producing results – good work Josh and team!",
  "The office is looking better, and will continue to look better in the coming weeks – hopefully we can all take pride in our improving HQ. The results and client wins look encouraging -  a proper team effort. ",
  "London is still looking very strong with great results coming from the Data Centre projects, and new client wins.",
  "Client wins keep coming from Winvic and Kier, and large numbers of PSLs being completed for Cala, Blanchard Wells and ISG. Marti making strides forward north of the border. ",
  "Alan and the team are very busy pricing a number of new jobs, in addition to the 2 Data Centres already secured. At the last count this was 5, but we’re are getting new enquiries almost daily, which is fantastic. Massive welcome to Mihaela who joins the team this week!",
  "We’re invoicing clients this week, and the pipeline looks strong for the remainder of Q1, and into Q2 – watch this space (and the sales report!)",
];

export const Anim = () => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      10000 // every 10 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1 className=" text-center">
    
      <TextTransition
        className="text-3xl"
        text={post[index % post.length]}
        springConfig={presets.wobbly}
      />
    </h1>
  );
};

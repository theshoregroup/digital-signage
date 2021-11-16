import chalk from "chalk"


export default function SkyNews({ title, id }) {
  console.log(
    chalk.bgWhite.black.bold("Sky News entry"),
    chalk.bold("With ID:"), id,
    chalk.bold("Title:"), title
  )
  return (
    <article>
      <p className="mx-10" dangerouslySetInnerHTML={{ __html: title }}></p>
    </article >
  )

}

async function SkyRSS() {
  let parser = new Parser();
  const RSSfeed = await parser.parseURL(
    "http://feeds.skynews.com/feeds/rss/uk.xml"
  );
}

export default SkyRSS;
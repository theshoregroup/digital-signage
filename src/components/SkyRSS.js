async function SkyRSS() {
  let parser = new Parser();
  const RSSfeed = await parser.parseURL(
    "http://feeds.skynews.com/feeds/rss/uk.xml"
  );
}

export default SkyRSS;

import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Time from "../components/Time";
import Weather from "../components/Weather";
import NewsFeed from "../components/NewsFeed";

export default function Component() {

  return (
    <>
      <Head>
        <title>Digital Signage</title>
      </Head>
      {/*
      This will form a 2x3 grid as such:
      |    Time (3frx125px)   | Current Events & Weather (1frx125px) |
      |   MainLeft (3frx5fr)  |                Right                 |
      | Bottom Left (3frx1fr) |              (1frx6fr)               |

      --

      All the values have been entered below, even when they are inherited, in the intrest in being implicit.
      */}

      <div className="hidden xl:grid grid-cols-[4fr_2fr] grid-rows-[125px_3fr_1fr] h-screen w-screen">
        {/* Top left - Time, Date & Weather */}
        <Container className="col-start-1 row-start-1 flex justify-between">
          <Time />
          <Weather location="Brighton" />
        </Container>

        {/* Top right - Current events, weather */}
        <Container className="col-start-2 row-start-1 flex justify-between">
          test
        </Container>

        {/* Main left - Repeating loop of YouTube videos, live YouTube videos, videos from the admin console, and scrolling internal news posts. */}
        <Container className="col-start-1 row-start-2">
          h
        </Container>

        {/* Right - News feed, coallates a number of sources (defined in admin UI) */}
        <Container className="col-start-2 row-start-2 row-span-2">
          <NewsFeed />
        </Container>

        {/* Bottom left - sales data feed */}
        <Container className="col-start-1 row-start-3"> d</Container>
      </div>

      {/* If display size is too small */}
      <div className="grid xl:hidden place-items-center h-screen">
        <div className="w-5/6">
          <h1 className="font-bold text-2xl block">
            Welcome to Digital signage.
          </h1>
          <Link href="/admin">
            <a className="bg-black p-2 rounded-md inline-block my-2 text-white">
              Go to the Admin Portal
            </a>
          </Link>
          <h2 className="italic text-lg">Trying to display the dashboard?</h2>
          <p>You can only display the dashboard on screens wider than 1280p</p>
        </div>
      </div>
    </>
  );
}

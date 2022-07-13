import Head from "next/head";
import Link from "next/link";
import Container from "../components/Container";
import Time from "../components/Time";
import Weather from "../components/Weather";
import CurrentEvents from "../components/CurrentEvents";
import { GetServerSideProps } from "next";
// @ts-ignore: no type definition for module
import cookie from "cookie";
import prisma from "../lib/prisma";
import MainGraph from "../components/blocks/graphs/MainGraph";

export default function Dashboard() {
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

        {/* Main left - Repeating loop of YouTube videos, live YouTube videos, videos from the admin console, and scrolling internal news posts. */}
        <Container className="col-start-1 row-start-2">
          {/* <VideoPlayer playerOptions={playerOptions} /> */}
        </Container>

        {/* Right - News feed, coallates a number of sources (defined in admin UI) */}
        <Container className="col-start-2 row-start-1 row-span-3">
          <CurrentEvents />
        </Container>

        {/* Bottom left - sales data feed */}
        <Container className="col-start-1 row-start-3">
          <MainGraph />
        </Container>
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
export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // First need to check if there are cookies
  if (!context.req.headers.cookie) {
    // No Cookies present - automatically redirect
    console.log("No cookies on client");
    return {
      redirect: {
        permanent: false,
        destination: "/admin/auth/newClient",
      },
      props: {},
    };
  }

  const parsedCookies = cookie.parse(context.req.headers.cookie);

  if (!parsedCookies["ds-token"]) {
    console.log("Redirected cos no cookie", parsedCookies);
    return {
      redirect: {
        permanent: false,
        destination: "/admin/auth/newClient",
      },
      props: {},
    };
  }

  // If cookie exists, check validation
  const token = parsedCookies["ds-token"];

  const isCookieValid = await prisma.clientCookies.findUnique({
    where: {
      token: token,
    },
  });

  if (!isCookieValid) {
    console.log("Redirected cos cookie is invalid", isCookieValid, token);
    return {
      redirect: {
        permanent: false,
        destination: "/admin/auth/newClient",
      },
      props: {},
    };
  }

  if (isCookieValid) {
    // If cookie is valid, update expiry date on cookie & db & return props (like OfficeID etc.)

    // Update expiry date on cookie
    const newExpiryDate = new Date(Date.now() + 7);

    context.res.setHeader("Set-Cookie", [
      cookie.serialize("ds-token", token, {
        maxAge: newExpiryDate,
        httpOnly: false,
        path: "/",
      }),
    ]);

    prisma.clientCookies.update({
      where: {
        token: token,
      },
      data: {
        expires: newExpiryDate,
      },
    });

    return {
      props: {
        cookie: token,
      },
    };
  }

  return {
    redirect: {
      permanent: false,
      destination: "/admin/auth/newClient",
    },
    props: {},
  };
};

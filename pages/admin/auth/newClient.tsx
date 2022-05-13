import cookie from "cookie";
const { v4: uuidv4 } = require("uuid");
import { GetServerSideProps } from "next";
import { AwesomeQRCode } from "@awesomeqr/react";
import useSWR from "swr";
import Router from "next/router";
import token from "../../api/admin/token";

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function AddNewClient(props: any) {
  const { data, error } = useSWR(
    `/api/admin/token?uuid=${props.cookie}`,
    fetcher,
    {
      refreshInterval: 5000,
      refreshWhenHidden: true,
    }
  );

  console.log(data);

  if (data) {
    if (data.token) {
      console.log("token is true", props.cookie);
      Router.push("/");
    }
  }

  return (
    <div>
      <h1>Add New Client</h1>
      <div className="h-60 w-60">
        <AwesomeQRCode
          options={{
            text: `http://shmacbook.local:3000/admin/auth/${props.cookie}`,
          }}
        />
      </div>
      http://localhost:3000/admin/auth/{props.cookie}
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  // Attempt to get a cookie from the client
  const parsedCookies = cookie.parse(context.req.headers.cookie);

  // We know that the cookie state right now is either missing or invalid
  if (parsedCookies["ds-token"]) {
    // If cookie exists, delete it
    context.res.setHeader("Set-Cookie", [
      cookie.serialize("ds-token", "", {
        maxAge: -1,
      }),
    ]);
  }

  // Generate a brand new cookie
  const generatedToken = uuidv4();

  // Create a new cookie
  context.res.setHeader("Set-Cookie", [
    cookie.serialize("ds-token", generatedToken, {
      maxAge: new Date(Date.now() + 7),
      HttpOnly: false,
      path: "/",
    }),
  ]);

  // Return props - this returns the token to the client which will add that to a QR code - should the user scan that, that page will add it to the DB (as long as they are logged in)
  return {
    props: {
      cookie: generatedToken,
    },
  };
};

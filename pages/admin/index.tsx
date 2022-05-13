import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import AdminNavbar from "../../components/admin/Navbar";
import useSWR, { Key, Fetcher } from "swr";
import React, { useState } from "react";

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface Props {
  itMessage: any;
}

export default function AdminDashboard({ itMessage }: Props) {
  const { data: session, status } = useSession();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [beginsAt, setBeginsAt] = useState(new Date());
  const [endsAt, setEndsAt] = useState(new Date());
  const { data, error } = useSWR("/api/admin/itMsg", fetcher, {
    refreshInterval: 10000,
    refreshWhenHidden: true,
  });

  const submitNewMessage = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const body = { title, message, beginsAt, endsAt };
      await fetch("/api/admin/itMsg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  };

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Admin Dashboard | Digital Signage</title>
        </Head>
        <AdminNavbar />
        <div className="w-11/12 mx-auto mt-10">
          <h1 className="text-3xl md:text-5xl font-bold">
            Welcome to the dashboard
          </h1>
          <h2 className="text-xl">IT Messages</h2>
          <table className="w-full table-fixed">
            <thead>
              <tr className="text-left">
                <th className="whitespace-nowrap">Title</th>
                <th className="flex-grow">Message</th>
                <th className="whitespace-nowrap"></th>
                {/* <th>Begins At</th>
                <th>Ends At</th> */}
              </tr>
            </thead>
            <tbody>
              {data &&
                data.map((itMessage: any) => (
                  <tr
                    className="overflow-hidden whitespace-nowrap"
                    key={itMessage.id}
                  >
                    <td className="whitespace-nowrap">{itMessage.title}</td>
                    <td className="overflow-hidden flex-grow">
                      {itMessage.message}
                    </td>
                    <td className="text-right whitespace-nowrap">Open</td>
                    {/* <td>{itMessage.beginsAt}</td>
                    <td>{itMessage.endsAt}</td> */}
                  </tr>
                ))}
            </tbody>
          </table>

          <h2 className="text-xl">Create new</h2>
          <form onSubmit={submitNewMessage}>
            <label htmlFor="title">Title</label>
            <input
              type="text"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <div className="block">
              <label htmlFor="beginsAt">Start date</label>
              <input
                type="datetime-local"
                id="beginsAt"
                value={new Date(beginsAt).toISOString().substr(0, 16)}
                onChange={(e) => setBeginsAt(new Date(e.target.value))}
              />
              <label htmlFor="endsAt">Ends at</label>
              <input
                type="datetime-local"
                id="endsAt"
                value={new Date(Date.now() + 7).toISOString().substr(0, 16)}
                onChange={(e) => setEndsAt(new Date(e.target.value))}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </>
    );
  }

  return (
    <>
      <p>You are not signed in.</p>
      <button onClick={() => signIn()}>Sign in!</button>
    </>
  );
}

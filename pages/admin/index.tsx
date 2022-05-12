import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import AdminNavbar from "../../components/admin/Navbar";
import useSWR from "swr";
import React, { useState } from "react";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface Props {
  itMessage: any
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
        <div>
          <h1 className="text-3xl font-bold">Welcome to the dashboard</h1>
          <h2 className="text-xl">IT Messages</h2>
          <ul>
            {data.map((item: any) => (
              <li key={item.id}>{item.title}</li>
            ))}
          </ul>
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
            <label htmlFor="beginsAt">Date</label>
            <input
              type="date"
              id="beginsAt"
              value={beginsAt}
              onChange={(e) => setBeginsAt(new Date(e.target.value))}
            />
            <label htmlFor="endsAt">Ends at</label>
            <input
              type="date"
              id="endsAt"
              value={endsAt}
              onChange={(e) => setEndsAt(new Date(e.target.value))}
            />
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
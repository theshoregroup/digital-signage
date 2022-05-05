import { GetServerSideProps } from "next";
import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import AdminNavbar from "../../components/admin/Navbar";
import prisma from "../../lib/prisma";

interface Props {
  itMessage: any
}

export default function Component({ itMessage }: Props) {
  const { data: session, status } = useSession();

  if (status === "authenticated") {
    return (
      <>
      <Head>
        <title>Admin Dashboard | Digital Signage</title>
      </Head>
      <AdminNavbar />
      <div>
        {/* Show all users */}
        <h2>Users</h2>
        <ul>
          {itMessage.map((item:any) => (
            <li key={item.id}>
              <a href={`/admin/users/${item.id}`}>{item.type}</a>
            </li>
          ))}
        </ul>
      </div>
      </>
    )
  }

  return (
    <>
      <p>You are not signed in.</p>
      <button onClick={() => signIn()}>Sign in!</button>
    </>
  );
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const itMessage = await prisma.itMessage.findMany();


  // Recursively change all the dates to a date object
  itMessage.forEach((item:any) => {
    item.createdAt = Math.floor(item.createdAt / 1000);
    item.beginsAt = Math.floor(item.beginsAt / 1000);
    item.endsAt = Math.floor(item.endsAt / 1000);
  });

  return {
    props: {itMessage},
  };
};
import { signIn, signOut, useSession } from "next-auth/react";

export default function AdminNavbar() {
  const { data: session, status } = useSession();
  return (
  <nav></nav>
  );
}

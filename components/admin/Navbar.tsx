import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function AdminNavbar() {
  const { data: session, status } = useSession();
  return (
    <nav className="w-screen h-20 bg-slate-600 px-4 text-white">
      <div className="flex justify-between items-center h-20">
        <div className="flex items-center">
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/images/logo.png"
                alt="Digital Signage"
                className="h-8 w-8"
              />
              <span className="ml-2 hidden sm:inline-block">
                Digital Signage
              </span>
            </a>
          </Link>
        </div>
        <div className="flex items-center text-right">
          {status === "unauthenticated" && (
            <button onClick={() => signIn()}>Sign in!</button>
          )}
          {status === "authenticated" && (
            <div className="space-x-3">
              <span className="hidden sm:inline-block">
                Welcome back, {session.user?.name}
              </span>

              <button
                className="p-2 bg-white text-black rounded-xl"
                onClick={() => signOut()}
              >
                Sign Out
              </button>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

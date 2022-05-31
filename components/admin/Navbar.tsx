import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { Dialog, Transition } from "@headlessui/react";
import { useState, Fragment } from "react";
import Router from "next/router";

export default function AdminNavbar() {
  const { data: session, status } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="w-screen bg-slate-200 h-20">
        <div className="flex justify-between items-center h-20 w-5/6 m-auto">
          <div className="flex items-center space-x-4">
            <Link href="/">
              <a className="flex items-center text-4xl font-semibold">
                Digital Signage
              </a>
            </Link>
          </div>
          <div className="flex items-center text-right">
            {status === "unauthenticated" && (
              <button
                className="bg-blue-200 p-3 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-blue-100 transition-colors duration-200"
                onClick={() => signIn()}
              >
                Sign in
              </button>
            )}
            {status === "authenticated" && (
              <button
                className="bg-blue-200 p-3 text-blue-500 rounded-lg hover:bg-blue-500 hover:text-blue-100 transition-colors duration-300"
                onClick={() => setIsOpen(true)}
              >
                <span className="hidden sm:inline-block">
                  Signed in as{" "}
                  <span className="font-bold tracking-normal">
                    {session?.user?.name}
                  </span>
                </span>
                <span className="sm:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => setIsOpen(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-slate-600 bg-opacity-75 backdrop-blur" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95 backdrop-blur-none"
                enterTo="opacity-100 scale-100 backdrop-blur"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100 backdrop-blur"
                leaveTo="opacity-0 scale-95 backdrop-blur-none"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    You are logged in
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Currently logged in as {session?.user?.name} (
                      {session?.user?.email})
                    </p>
                  </div>
                  <div className="space-x-3 mt-3">
                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                      onClick={() => signOut()}
                    >
                      Sign out
                    </button>

                    <button
                      className="inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={() => (setIsOpen(false), Router.push("/admin"))}
                    >
                      Go to dashboard
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

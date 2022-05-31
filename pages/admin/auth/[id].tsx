import { useSession, signIn } from "next-auth/react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import React, { Fragment, useState } from "react";
import AdminNavbar from "../../../components/admin/Navbar";
import { Listbox, Transition } from "@headlessui/react";
import prisma from "../../../lib/prisma";
import { GetServerSideProps } from "next";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

export default function AddANewClient({ offices }: any) {
  const { status } = useSession({
    required: true,
    onUnauthenticated() {
      signIn();
    },
  });
  const router = useRouter();
  const { id } = router.query;
  const [selectedOffice, setSelectedOffice] = useState(offices[0]);

  async function addNewClient(uuid: any, officeId: String) {
    try {
      const body = { token: uuid, officeId };
      await fetch("/api/admin/token", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
    } catch (error) {
      console.error(error);
    }
  }

  if (status === "authenticated") {
    return (
      <div className="bg-slate-50">
        <span className="absolute ">
          <AdminNavbar />
        </span>
        <div className="h-screen grid place-items-center">
          <div className="border-2 border-green-300 w-full max-w-md m-5 transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle transition-all">
            <h1 className="text-lg font-medium leading-6 text-gray-900">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 inline text-green-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
                />
              </svg>{" "}
              Adding a new client
            </h1>
            <p className="text-sm text-gray-500 mt-2">
              You are about to add a new client with the UUID of{" "}
              <span className="text-yellow-500 block">{id}</span>
              You can revoke access inside the{" "}
              <Link href={`/admin`}>
                <a className="text-sky-400">
                  admin portal{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 inline"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </a>
              </Link>
            </p>

            <label className="block mt-4 font-medium leading-5 text-gray-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>{" "}
              Attach to an office
            </label>
            <Listbox value={selectedOffice} onChange={setSelectedOffice}>
              <div className="mt-1">
                <Listbox.Button className="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-blue-300 sm:text-sm">
                  <span className="block truncate">{selectedOffice.name}</span>
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                    <SelectorIcon
                      className="h-5 w-5 text-gray-400"
                      aria-hidden="true"
                    />
                  </span>
                </Listbox.Button>
                <Transition
                  as={Fragment}
                  leave="transition ease-in duration-100"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <Listbox.Options className="absolute mt-1 w-5/6 max-h-60 overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {offices.map((office: any, officeIdx: string) => (
                      <Listbox.Option
                        key={officeIdx}
                        className={({ active }) =>
                          `relative cursor-default select-none py-2 pl-10 pr-4 ${
                            active ? "bg-sky-100 text-sky-900" : "text-gray-900"
                          }`
                        }
                        value={office}
                      >
                        {({ selected }) => (
                          <>
                            <span
                              className={`block truncate ${
                                selected ? "font-medium" : "font-normal"
                              }`}
                            >
                              {office.name}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                                <CheckIcon
                                  className="h-5 w-5"
                                  aria-hidden="true"
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              </div>
            </Listbox>
            <p className="text-sm text-gray-500 mt-2">
              Adding an office will allow scoped requests - such as weather
              requests - to be made. This can be edited inside the admin portal.
            </p>

            <div className="space-x-3 mt-3">
              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                onClick={() => Router.push("/admin")}
              >
                Cancel
              </button>

              <button
                className="inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2"
                onClick={() => (
                  addNewClient(id, selectedOffice.id), Router.push("/admin")
                )}
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const offices = await prisma.offices.findMany();
  return {
    props: {
      offices,
    },
  };
};

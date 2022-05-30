import { signIn, useSession } from "next-auth/react";
import Head from "next/head";
import AdminNavbar from "../../components/admin/Navbar";
import useSWR, { useSWRConfig } from "swr";
import React, { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

interface Props {
  itMessage: any;
}

export default function AdminDashboard({ itMessage }: Props) {
  const { mutate } = useSWRConfig();

  const { data: session, status } = useSession();
  const [createDialog, setCreateDialog] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);

  const { data, error } = useSWR("/api/admin/itMsg", fetcher, {
    refreshInterval: 10000,
    refreshWhenHidden: true,
  });

  const submitNewMessage = async (event: any) => {
    event.preventDefault();
    try {
      const body = {
        title: event?.target?.title?.value,
        message: event.target.message.value,
        beginsAt: new Date(event.target.startsAt.value),
        endsAt: new Date(event.target.endsAt.value),
      };
      await fetch("/api/admin/itMsg", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      console.log(body);
      setCreateDialog(false);
      mutate("/api/admin/itMsg");
    } catch (error) {
      console.error(error);
    }
  };

  async function deleteAllMessages() {
    try {
      await fetch("/api/admin/itMsg", {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ "delete-type": "all" }),
      });
      mutate("/api/admin/itMsg");
      setDeleteModal(false);
    } catch (error) {
      console.error(error);
    }
  }

  if (status === "authenticated") {
    return (
      <>
        <Head>
          <title>Admin Dashboard | Digital Signage</title>
        </Head>
        <AdminNavbar />

        <div className="w-5/6 mx-auto pt-5">
          <h1 className="text-3xl font-bold">Your Dashboard</h1>
          {/* TODO: Add in blurb */}
          <div className="py-5">
            <div className="space-x-5">
              <h2 className="inline-block text-2xl">IT Alerts</h2>
              <button
                type="button"
                onClick={() => setCreateDialog(true)}
                className="rounded-md bg-blue-700 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75"
              >
                Create new{" "}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 inline-block"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>

            {/* Table */}
            <div className="bg-slate-200 mt-4 py-4 px-7 inline-block rounded-xl">
              <table className="">
                <thead>
                  <tr className="text-left">
                    <th className="whitespace-nowrap">Title</th>
                    <th className="flex-grow">Message</th>
                    <th>Ends At</th>
                    <th className="whitespace-nowrap"></th>
                  </tr>
                </thead>
                <tbody className="space-x-2">
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
                        <td>{itMessage.endsAt}</td>
                        <td className="text-right whitespace-nowrap">Open</td>
                      </tr>
                    ))}
                </tbody>
              </table>
              <div>
                <button
                  className="mt-3 text-red-500"
                  onClick={() => setDeleteModal(true)}
                >
                  Delete all
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Dialog - Add new */}
        <Transition appear show={createDialog} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setCreateDialog(false)}
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
                      Create a new alert
                    </Dialog.Title>
                    <Dialog.Description>
                      <div className="mt-2">
                        <p className="text-sm text-gray-500">
                          Add a new IT alert to the system.
                        </p>
                      </div>
                    </Dialog.Description>

                    <form onSubmit={submitNewMessage}>
                      <div className="mt-6 space-y-4">
                        <div>
                          <label
                            htmlFor="title"
                            className="block text-sm font-medium leading-5 text-gray-700"
                          >
                            Title
                          </label>
                          <div className="mt-1 rounded-md shadow-sm">
                            <input
                              id="title"
                              type="text"
                              className="form-input border-2 border-gray-300 rounded-sm block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                              name="title"
                              required
                            />
                          </div>
                        </div>

                        <div>
                          <label
                            htmlFor="message"
                            className="block text-sm font-medium leading-5 text-gray-700"
                          >
                            Message
                          </label>
                          <div className="mt-1 rounded-md shadow-sm">
                            <textarea
                              id="message"
                              required
                              className="form-input resize-none border-2 border-gray-300 rounded-sm block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                            />
                          </div>
                        </div>

                        <div>
                          <div>
                            <label
                              htmlFor="startsAt"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Starts At
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                              <input
                                id="startsAt"
                                required
                                defaultValue={new Date().toISOString()}
                                type="datetime-local"
                                readOnly={false}
                                className="form-input border-2 border-gray-300 rounded-sm block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div>
                            <label
                              htmlFor="endsAt"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Ends At
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                              <input
                                id="endsAt"
                                required
                                type="datetime-local"
                                defaultValue={new Date().toISOString() + 7}
                                readOnly={false}
                                className="form-input border-2 border-gray-300 rounded-sm block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                              />
                            </div>
                          </div>
                        </div>

                        <div>
                          <div>
                            <label
                              htmlFor="contact"
                              className="block text-sm font-medium leading-5 text-gray-700"
                            >
                              Contact
                            </label>
                            <div className="mt-1 rounded-md shadow-sm">
                              <input
                                id="contact"
                                type="email"
                                defaultValue="it@theshoregroup.co.uk"
                                className="form-input border-2 border-gray-300 rounded-sm block w-full transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="mt-6 space-x-4">
                        <button
                          className="inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                          onClick={() => setCreateDialog(false)}
                          type="reset"
                        >
                          Clear
                        </button>
                        <button
                          type="submit"
                          className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        >
                          Submit
                        </button>
                      </div>
                    </form>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>

        {/* Dialog - Delete all confirmation */}
        <Transition appear show={deleteModal} as={Fragment}>
          <Dialog
            as="div"
            className="relative z-10"
            onClose={() => setDeleteModal(false)}
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
                      className="text-lg font-medium leading-6 text-red-500"
                    >
                      Are you sure?
                    </Dialog.Title>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        You are going to be deleting{" "}
                        <span className="text-red-500">all</span> {data.length}{" "}
                        messages from the database.{" "}
                        <span className="text-red-500 font-bold block">
                          This action cannot be undone
                        </span>
                      </p>
                    </div>
                    <div className="space-x-3">
                      <button
                        className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-sky-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-sky-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                        onClick={() => setDeleteModal(false)}
                      >
                        I am stupid
                      </button>
                      <button
                        className="mt-3 inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2"
                        onClick={() => deleteAllMessages()}
                      >
                        I know what I'm doing
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
  } else {
    return (
      <>
        <span className="absolute">
          <AdminNavbar />
        </span>
        <div className="grid place-items-center h-screen bg-red-100">
          <div className="grid place-items-center bg-white px-5 py-10 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-24 w-24 text-red-500"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M13.477 14.89A6 6 0 015.11 6.524l8.367 8.368zm1.414-1.414L6.524 5.11a6 6 0 018.367 8.367zM18 10a8 8 0 11-16 0 8 8 0 0116 0z"
                clipRule="evenodd"
              />
            </svg>
            <h1 className="text-5xl font-bold mt-7 mx-5 block text-red-500">
              Authorization required
            </h1>
            <p>You need to be logged in to see this page</p>
            <button
              className="bg-blue-100 text-blue-500 mt-3 p-2 rounded-lg"
              onClick={() => signIn()}
            >
              Sign in now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 inline"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 15.707a1 1 0 010-1.414L14.586 10l-4.293-4.293a1 1 0 111.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
                <path
                  fillRule="evenodd"
                  d="M4.293 15.707a1 1 0 010-1.414L8.586 10 4.293 5.707a1 1 0 011.414-1.414l5 5a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>
      </>
    );
  }
}

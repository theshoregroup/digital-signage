import useSWR, { useSWRConfig } from "swr";

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function ActiveSessions() {
  const { mutate } = useSWRConfig();
  const { data, error } = useSWR("/api/admin/sessions", fetcher, {
    refreshInterval: 10000,
    refreshWhenHidden: true,
  });
  return (
    <div className="py-5">
      <div className="space-x-5">
        <h2 className="inline-block text-2xl">Active Sessions</h2>

        {/* Table */}
        <div className="bg-slate-200 mt-4 py-4 px-7 inline-block rounded-xl overflow-scroll w-full">
          <table className="w-full">
            <thead>
              <tr className="text-left">
                <th className="whitespace-nowrap">Nickname</th>
                <th>Cookie Token</th>
                <th>Ends At</th>
                <th className="whitespace-nowrap"></th>
              </tr>
            </thead>
            <tbody className="space-x-2">
              {data &&
                data.map((activeSession: any) => (
                  <tr
                    className="overflow-hidden whitespace-nowrap"
                    key={activeSession.id}
                  >
                    <td className="whitespace-nowrap">
                      {activeSession.nickname}
                    </td>
                    <td>{activeSession.token}</td>
                    <td>{activeSession.expires}</td>
                    <td className="text-right whitespace-nowrap space-x-2">
                      <button className="p-1 rounded-lg text-blue-700 hover:underline hover:text-blue-500 transition-all duration-100">
                        Edit
                      </button>
                      <button className="p-1 rounded-lg text-red-700 hover:underline hover:text-red-500 transition-all duration-100">
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div>
            <button className="mt-3 text-red-500" onClick={}>
              Delete all
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

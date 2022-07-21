// Idea is to have a X value 'hardcoded' from initialisation

interface TableInterface {
  tableData: {
    tableName: String;
    xValues: any; // Not sure how to show arrays would be title: String, type: 'default' | 'action' & optionally action:
  };
}

export default function Table({ data, actions }: any) {
  return (
    <div className="bg-slate-200 mt-4 py-4 px-7 inline-block rounded-xl overflow-scroll w-full">
      <table className="w-full">
        <thead>
          <tr className="text-left">
            <th className="whitespace-nowrap">Title</th>
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
                <td>{itMessage.endsAt}</td>
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
        <button className="mt-3 text-red-500">Delete all</button>
      </div>
    </div>
  );
}

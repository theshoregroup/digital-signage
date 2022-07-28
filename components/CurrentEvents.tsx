import { NewspaperIcon } from "@heroicons/react/solid";
import useSWR from "swr";

// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function CurrentEvents() {
  function itMessaging() {
    const { data, error } = useSWR("/api/getNews", fetcher, {
      refreshInterval: 10000,
      refreshWhenHidden: true,
    });

    if (error || data == undefined)
      return <div>IT Messages: Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
      <>
        {data.itMessage.map((item: any) => (
          <li
            key={item.title}
            className="flex p-2 mb-5 bg-slate-600 drop-shadow-md rounded-lg"
          >
            <span className="flex h-5 w-5 relative mr-3 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            </span>
            <div className="overflow-hidden">
              <span className="text-4xl font-bold w-full flex-wrap">
                {item.title}
              </span>
              <p className="text-3xl italic font-mono font-semibold flex-wrap">
                {item.message}
              </p>
            </div>
          </li>
        ))}
      </>
    );
  }

  function news() {
    const { data, error } = useSWR("/api/news", fetcher, {
      refreshInterval: 1000000,
      refreshWhenHidden: true,
    });

    if (error)
      return (
        <div className="grid place-items-center">
          <div className="text-red-300 p-5 rounded-lg">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-44 w-44"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.7}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            <span className="text-2xl font-bold">Error</span>
          </div>
        </div>
      );
    if (!data) return <div>Loading...</div>;

    return (
      <>
        {data.articles.map((item: any) => (
          <li className="flex" key={item.title}>
            <div className="h-full my-auto ml-1 mr-4 flex-shrink-0">
              <img
                src={item.urlToImage || "https://placeholder.pics/svg/30x30"}
                alt={item.title}
                onError={(e) => {
                  e.currentTarget.src = "https://placeholder.pics/svg/30x30";
                }}
                className="w-10"
              />
            </div>
            <div className="overflow-hidden flex-shrink">
              <span className="text-xl font-bold block">{item.title}</span>
              <span className="text-xl block truncate">{item.source.name}</span>
            </div>
          </li>
        ))}
      </>
    );
  }

  return (
    <aside className="">
      <ul className="space-y-4">
        {itMessaging()}
        {news()}
      </ul>
    </aside>
  );
}

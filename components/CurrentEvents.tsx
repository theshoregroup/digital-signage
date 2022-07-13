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
            className="flex p-2 mb-5 bg-white drop-shadow-md rounded-lg"
          >
            <span className="flex h-5 w-5 relative mr-3 mt-1">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
            </span>
            <div className="overflow-hidden">
              <span className="text-3xl font-bold w-full flex-wrap">
                {item.title}
              </span>
              <p className="text-xl italic flex-wrap">{item.message}</p>
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

    if (error) return <div>Failed to load</div>;
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

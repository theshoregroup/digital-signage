import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function NewsFeed() {
  const { data, error } = useSWR("/api/getNews", fetcher, {refreshInterval: 10000, refreshWhenHidden: true});

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  let itMessage

  if (data.itMessage !== undefined) {
    itMessage = (
      <div className="flex p-2 mb-5 bg-white drop-shadow-md rounded-lg">
        <span className="flex h-5 w-5 relative mr-3 mt-1">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-5 w-5 bg-red-500"></span>
        </span>
        <div className="overflow-hidden">
          <span className="text-3xl font-bold uppercase truncate">
            {data.itMessage.type}: {data.itMessage.title}
          </span>
          <p className="text-xl italic flex-wrap">{data.itMessage.message}</p>
        </div>
      </div>
    );
  }

  return (
    <aside className="">
      {itMessage}
      <ul className="space-y-2">
        {data.news.map((item: any) => (
          <li className="flex" key={item.title}>
            <div className="h-full my-auto ml-1 mr-4 flex-shrink-0">
              <img
                src={item.image || "https://placeholder.pics/svg/30x30"}
                alt={item.title}
              />
            </div>
            <div className="overflow-hidden flex-shrink">
              <span className="text-2xl font-bold block truncate">
                {item.title}
              </span>
              <span className="text-xl block truncate">{item.source}</span>
            </div>
          </li>
        ))}
      </ul>
    </aside>
  );
}

import useSWR from "swr";

interface Props {
  location: string;
}
// @ts-ignore: Rest parameter 'args' implicitly has an 'any[]' type.
const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Weather({ location }: Props) {
  const baseUrl = "https://api.weatherapi.com/v1/current.json";
  const key = process.env.WEATHER_API_KEY;
  const url = baseUrl + "?key=" + key + "&q=" + location + "&aqi=no";

  const { data, error } = useSWR(url, fetcher, {
    refreshInterval: 600000,
    refreshWhenHidden: true,
  });

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  // TODO: Add in a clause for too many requests/wrong API key etc

  function imageLink() {
    return `https:${data.current.condition.icon}`;
  }

  return (
    <div className="my-auto flex space-x-4">
      <div>
        <span className="text-5xl font-bold block text-right">
          {data.current.temp_c}&#176;
        </span>
        <span className="text-xl">
          Feels like {data.current.feelslike_c}&#176;
        </span>
      </div>
      <div>
        <img
          src={imageLink()}
          alt={data.current.condition.text}
          className="h-20"
        />
      </div>
    </div>
  );
}

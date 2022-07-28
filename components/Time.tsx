import { useState, useEffect } from "react";

export default function Time() {
  // Handling the time
  // TODO: Export this to a separate component, it takes up a lot of space for something so simple!
  // Handles getting the time on page load and refreshing every 10s
  const [time, setTime] = useState(new Date());
  useEffect(() => {
    setInterval(() => setTime(new Date()), 10000);
  }, []);

  // Define days/months so they are easier to display
  const timeData = {
    days: {
      0: "Monday",
      1: "Tuesday",
      2: "Wednesday",
      3: "Thursday",
      4: "Friday",
      5: "Saturday",
      6: "Sunday",
    },
    months: {
      0: "January",
      1: "February",
      2: "March",
      3: "April",
      4: "May",
      5: "June",
      6: "July",
      7: "August",
      8: "September",
      9: "October",
      10: "November",
      11: "December",
    },
    endNumber: {
      0: "th",
      1: "st",
      2: "nd",
      3: "rd",
      4: "th",
    },
  };

  function putOnEnd() {
    // This function puts the correct ending on the day
    if (time.getDate() > 4 || time.getDate() < 20) {
      return timeData.endNumber[4];
    } else {
      return timeData.endNumber[
        (time.getDate() % 10) as keyof typeof timeData.endNumber
      ];
    }
  }

  return (
    <div className="my-auto">
      <span className="block text-6xl font-bold">
        {time.getHours()}
        <span className="animate-pulse">:</span>
        {time.getMinutes() < 10 ? `0${time.getMinutes()}` : time.getMinutes()}
      </span>

      <span className="block text-4xl italic">
        {[
          timeData.days[time.getDay() as keyof typeof timeData.days],
          ", ",
          time.getDate(),
          putOnEnd(),
          " of ",
          timeData.months[time.getMonth() as keyof typeof timeData.months],
          " ",
          time.getFullYear(),
        ]}
      </span>
    </div>
  );
}

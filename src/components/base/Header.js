import React, { useState, useEffect } from "react";


export default function Header() {
  // Define date
  const [currentDate, setDateState] = useState(new Date());
  let location = "q=Brighton";

  // Set UseEffect to update every 1000ms (1s)
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 1000);
  }, [location]);

  return (
    <div>
      <div className="h-full w-full flex justify-between ">
        <div className="px-4 py-5 text-white col-start-1 col-span-3">
          <span className="block text-9xl font-semibold">
            {currentDate.toLocaleString("en-US", {
              hour: "numeric",
              minute: "numeric",
              hour12: true,
            })}
          </span>
          <span className="text-5xl">
            {currentDate.toLocaleDateString("en-GB", {
              dateStyle: "full",
            })}
          </span>
        </div>
      </div>
    </div>
  );
}

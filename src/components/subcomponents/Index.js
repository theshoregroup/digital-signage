import { useState, useEffect } from "react";
import React from "react";

export default function Index() {
  const initialCounterValue = 0;
  let [index, setIndex] = useState(initialCounterValue);

  const increment = useEffect(() => {
    setIndex(index + 1);
  }, [setIndex, index]);

  setInterval(increment, 1000);
  if (index >= 4) {
    index = initialCounterValue;
  }
  console.log(index);
 return index
}

export let index = 0
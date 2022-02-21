import { useState } from 'react'
import React from 'react';

function Index() {
    let [index, setIndex] = useState(0);
    const increment = () => {
      setIndex(index + 1);
    };
    const reset = () => {
      setIndex((index = 0));
    };
  
  }


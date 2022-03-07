import { useState, useEffect } from "react";
import React from "react";
let index = 0

export default function Increment(){
if (index < 5){
  setTimeout(index++, 5000)
}
else {
  index = 0
}
}


export {index}

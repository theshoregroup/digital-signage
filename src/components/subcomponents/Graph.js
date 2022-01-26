import React from "react";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,

  BarElement
} from "chart.js";

import { Doughnut, Pie, Bar, Line, Chart } from "react-chartjs-2";


ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement
);

//declare monthly sales target values. route ALL values through backend when connection is established.
const salesTarget = 607500;
const jan = {
  weekOne : 94000,
  weekTwo : 123000,
  weekThree: 0,
  weekFour: 0,
  weekFive: 0

} 
const salesSoFar = jan.weekOne + jan.weekTwo + jan.weekThree + jan.weekFour + jan.weekFive
const remainingTarget = salesTarget - salesSoFar

console.log(salesSoFar)
console.log(remainingTarget)







//new regions setup block
export const newRegions = {
  labels: ["NEW REGIONS", "CONSTRUCTION", "M&E"],
  datasets: [
    {
      label: "# of Votes",
      data: [22, 33, 45],
      backgroundColor: [
        "rgba(255, 99, 132, 0.6)",
        "rgba(54, 162, 235, 0.6)",
        "rgba(255, 206, 86, 0.6)",
       
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
        "rgba(255, 159, 64, 1)",
      ],
      borderWidth: 1,

    },
  ],
};




//sales report set-up block
export const salesReport = {
  labels: [
    'Week One',
    'Week Two',
    'Week Three',
    'Week Four'
  ],
  datasets: [{
    type: 'bar',
    label: 'Sales',
    data: [94406, 123000, 30, 40],
    borderColor:   "rgba(255, 99, 132, 1)",
    
    backgroundColor:   "rgba(255, 99, 132, 0.6)",
    order: 1
  }, {
    type: 'line',
    label: 'Target',
    data: [135000, 135000, 135000, 135000],
    fill: false,
    borderColor: 'rgb(54, 162, 235)'
  }],
  text: '23%'
};


//render block
export function Graph() {
  return (
    <div className="grid grid-cols-6 grid-rows-9">
      <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
      <h1>WEEKLY SALES</h1>
        <Line data={salesReport} />
      </div>
      <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
        <h1>NEW BUSINESS WINS BY SECTOR</h1>
        <Pie data={newRegions} />
      </div>
      
    </div>
  );
}

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
  BarElement,
} from "chart.js";

import { Doughnut } from "react-chartjs-2";

//update target to reflect actual numbers 

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
  weekOne: 94000,
  weekTwo: 123000,
  weekThree: 0,
  weekFour: 0,
  weekFive: 0,
};
const salesSoFar =
  jan.weekOne + jan.weekTwo + jan.weekThree + jan.weekFour + jan.weekFive;
const remainingTarget = salesTarget - salesSoFar;

function targetPercentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(0);
}

const percentage = targetPercentage(salesSoFar, salesTarget);

console.log(targetPercentage);

//sales report graph set-up
export const salesReport = {
  labels: ["Sales this month", "Target"],
  datasets: [
    {
      label: "# of Votes",
      data: [salesSoFar, remainingTarget],
      backgroundColor: ["rgba(30, 255, 99, 0.6)", "rgba(255, 50, 50, 0.8)"],
      borderColor: ["rgba(30, 255, 99, 1)", "rgba(255, 50, 50, 1)"],
      borderWidth: 1,
    },
  ],
};

export default function SalesReport() {
  return (
    <div className="text-center">
         <h1>Monthly Sales</h1>
      <h1>{percentage}% of target</h1>
      <Doughnut data={salesReport} />

   
    </div>
  );
}
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

import { Line } from "react-chartjs-2";

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



const mAndESales = {
  labels: [
"George Surry",
"Tommy Tripp",
"Matt Watts",
"Phil Navichas",
"Alfie Herbert",
"Ella Durrant",
"Luke Guainiere"
  ],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [12215, 13074, 4585, 1821, 6073, 4331, 4241],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [15633, 24608, 10422, 0, 19686, 4825, 10615],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

export function MANDE() {
  return (
    <div>
      <h1> M&E Sales</h1>
      <Line data={mAndESales} />
    </div>
  );
}

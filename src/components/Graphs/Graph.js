//MEN WORKING per department ? bar graph
//

//Targets vs actuals PER DEPARTMENT bar graph with line
//

//different view for every department showing relevant stats ?
//men working + targets v actuals per person

// compliance - total compliant percentage -
//animated total compliance percantage in doughnut graph with number in middle

// VIEW FOR EVERY DEPARTMENT
//Bar graph showing performance per person with
//Doughnut graph with number in middle showing percentage of target achieved

//jobs filled ratio ?

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

import { Pie, Line, Doughnut } from "react-chartjs-2";

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

//Calculate percentage function
function targetPercentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(0);
}

//declare monthly sales target values. route ALL values through backend when connection is established.


//Construction values - for construction doughnut graph
let constructionTotalSalesSoFar = 110053;
let constructionTotalSalesTarget = 127900;
let constructionRemainingTarget =
  constructionTotalSalesSoFar - constructionTotalSalesTarget;

//M&E values
let mAndETotalSalesSoFar = 139195;
let mAndETotalSalesTarget = 111100;
let mAndERemainingTarget = mAndETotalSalesSoFar - mAndETotalSalesTarget;

//Fit out vales
let fitOutTotalSalesSoFar = 29944;
let fitOutTotalSalesTarget = 39600;
let fitOutRemainingTarget = fitOutTotalSalesSoFar - fitOutTotalSalesTarget;

//Men working vales
let constructionMW = 1261
let mAndEMW = 767
let fitOutMW = 482
let newRegionsMW = 283


//Construction target doughnut graph
export const percentageOfConstructionTarget = {
  labels: ["Sales this month", "Target"],
  datasets: [
    {
      label: "# of Votes",
      data: [constructionTotalSalesSoFar, constructionRemainingTarget],
      backgroundColor: ["rgba(30, 255, 99, 0.6)", "rgba(255, 50, 50, 0.8)"],
      borderColor: ["rgba(30, 255, 99, 1)", "rgba(255, 50, 50, 1)"],
      borderWidth: 1,
    },
  ],
};

//M&E target doughnut graph
export const percentageOfMANDETarget = {
  labels: ["Sales this month", "Target"],
  datasets: [
    {
      label: "# of Votes",
      data: [mAndETotalSalesSoFar, mAndERemainingTarget],
      backgroundColor: ["rgba(30, 255, 99, 0.6)", "rgba(255, 50, 50, 0.8)"],
      borderColor: ["rgba(30, 255, 99, 1)", "rgba(255, 50, 50, 1)"],
      borderWidth: 1,
    },
  ],
};

//Fitout remaining target doughnut graph
export const percentageOfFitOutTarget = {
  labels: ["Sales this month", "Target"],
  datasets: [
    {
      label: "# of Votes",
      data: [fitOutTotalSalesSoFar, fitOutRemainingTarget],
      backgroundColor: ["rgba(30, 255, 99, 0.6)", "rgba(255, 50, 50, 0.8)"],
      borderColor: ["rgba(30, 255, 99, 1)", "rgba(255, 50, 50, 1)"],
      borderWidth: 1,
    },
  ],
};

//Men working ordered by department
const menWorkingByDepartment = {
  labels: ["Construction", "M&E", "Fit Out", "New Regions"],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [constructionMW, mAndEMW, fitOutMW, newRegionsMW],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
  ],
  text: "23%",
};

export function MenWorkingByDepartment() {
  return (
    <div>
      <h1> Total Men Working - Feburary Week Three </h1>
      <Line data={menWorkingByDepartment} />
    </div>
  );
}

//M&E Sales vs target
const mAndESales = {
  labels: [
    "George Surry",
    "Tommy Tripp",
    "Matt Watts",
    "Phil Navichas",
    "Alfie Herbert",
    "Ella Durrant",
    "Luke Guainiere",
  ],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [74349, 28939, 7675, 5494, 10970, 4829, 6940],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [18000, 30600, 14400, 3400, 25500, 6000, 13200],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

//Construction sales vs target
const constructionSales = {
  labels: [
    "Joshua Boyce",
    "Chloe May",
    "Dan Branch",
    "Adam Miller",
    "Sarah Sheehan",
    "Lucy Smith",
    "Charley Abbott",
  ],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [17636, 29867, 17502, 15513, 11980, 11529, 6026],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [21000, 31500, 18000, 24000, 18400, 6000, 9000],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

//Fit-out sales vs targets
const fitOutSales = {
  labels: ["Charlotte Carr",  "Rebecca Colmer"],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [18905,  11038],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [25476,  10422],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

//Construction graph component
export function ConstructionGraph() {
  return (
    <div>
      <h1>Construction Sales - Feburary Week Three</h1>
      <Line data={constructionSales} />
    </div>
  );
}

//M&E graph component
export function MANDEGraph() {
  return (
    <div>
      <h1> M&E Sales - Feburary Week Three </h1>
      <Line data={mAndESales} />
    </div>
  );
}

//Fit-out graph component
export function FitOutGraph() {
  return (
    <div>
      <h1> Fit Out Sales - Feburary Week Three</h1>
      <Line data={fitOutSales} />
    </div>
  );
}

export function Graph(props) {
  switch (props.state) {
    case "construction":
      let constructionPercentage = targetPercentage(
        constructionTotalSalesSoFar,
        constructionTotalSalesTarget
      );
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <ConstructionGraph />
          </div>
          <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
            <h1>{constructionPercentage}% of target</h1>
            <Doughnut data={percentageOfConstructionTarget} />
          </div>
        </div>
      );
    case "mne":
      let mAndE = targetPercentage(mAndETotalSalesSoFar, mAndETotalSalesTarget);
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <MANDEGraph />
          </div>
          <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
            <h1>{mAndE}% of target</h1>
            <Doughnut data={percentageOfMANDETarget} />
          </div>
        </div>
      );
    case "fitout":
      let fitOutPercentage = targetPercentage(
        fitOutTotalSalesSoFar,
        fitOutTotalSalesTarget
      );
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <FitOutGraph />
          </div>
          <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
            <h1>{fitOutPercentage}% of target</h1>
            <Doughnut data={percentageOfFitOutTarget} />
          </div>
        </div>
      );
    case "menWorkingByDept":
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <MenWorkingByDepartment />
          </div>
        </div>
      );

    default:
      return null;
  }
}

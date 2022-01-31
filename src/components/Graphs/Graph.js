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

//Construction values
let constructionTotalSalesSoFar = 89001;
let constructionTotalSalesTarget = 103062;
let constructionRemainingTarget =
  constructionTotalSalesSoFar - constructionTotalSalesTarget;

//M&E values
let mAndETotalSalesSoFar = 79124;
let mAndETotalSalesTarget = 85789;
let mAndERemainingTarget = mAndETotalSalesSoFar - mAndETotalSalesTarget;

//Fit out vales
let fitOutTotalSalesSoFar = 27643;
let fitOutTotalSalesTarget = 39662;
let fitOutRemainingTarget = fitOutTotalSalesSoFar - fitOutTotalSalesTarget;

//Men working vales
let constructionMW = 342
let mAndEMW = 269
let fitOutMW = 173
let newRegionsMW = 89

//total non-compliance per person? 


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
  labels: ["Week One", "Week Two", "Week Three", "Week Four"],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [94406, 123000, 30, 40],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [135000, 135000, 135000, 135000],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

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

//Fitout reamining target doughnut graph
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
      <h1> Total Men Working </h1>
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
      data: [25277, 21092, 6777, 1956, 10145, 6143, 7735],
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
      data: [15455, 22832, 11663, 10518, 10002, 6975, 11557],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [18818, 24608, 15440, 18528, 15537, 4343, 5790],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

//Fit-out sales vs targets
const fitOutSales = {
  labels: ["Charlotte Carr", "Lola Meredith", "Rebecca Colmer"],
  datasets: [
    {
      type: "bar",
      label: "Sales",
      data: [16388, 2016, 9240],
      borderColor: "rgba(255, 99, 132, 1)",

      backgroundColor: "rgba(255, 99, 132, 0.6)",
      order: 1,
    },
    {
      type: "line",
      label: "Target",
      data: [25476, 3764, 10422],
      fill: false,
      borderColor: "rgb(54, 162, 235)",
    },
  ],
};

//Construction graph component
export function ConstructionGraph() {
  return (
    <div>
      <h1>Construction sales</h1>
      <Line data={constructionSales} />
    </div>
  );
}

//M&E graph component
export function MANDEGraph() {
  return (
    <div>
      <h1> M&E Sales</h1>
      <Line data={mAndESales} />
    </div>
  );
}

//Fit-out graph component
export function FitOutGraph() {
  return (
    <div>
      <h1> Fit Out Sales</h1>
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

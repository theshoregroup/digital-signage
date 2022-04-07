// 6.4.2021
// Defines graphs and handles any calculations related to graph operations.

import React, { useState, useEffect } from "react";

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
  BarController,
} from "chart.js";

import { Line, Doughnut } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  BarElement,
  BarController
);

//Calculate percentage function
function targetPercentage(partialValue, totalValue) {
  return ((100 * partialValue) / totalValue).toFixed(0);
}

//declare graph colour scheme CHANGE VAR NAMES
let lime = "rgba(0, 174,255, 0.9)";
let pink = "rgba(255, 0, 72, 1)";

let green = "rgba(0, 255, 30, 1)";
let red = "rgba(255, 0, 72, 1)";

//declare monthly sales target values. route ALL values through backend when connection is established.

//Construction values - for construction doughnut graph
let constructionTotalSalesSoFar = 188749;
let constructionTotalSalesTarget = 165125;
let constructionRemainingTarget =
  constructionTotalSalesSoFar - constructionTotalSalesTarget;
if (constructionTotalSalesSoFar >= constructionTotalSalesTarget) {
  constructionRemainingTarget = 0;
}

//M&E values
let mAndETotalSalesSoFar = 145035;
let mAndETotalSalesTarget = 163000;
let mAndERemainingTarget = mAndETotalSalesTarget - mAndETotalSalesSoFar;
if (mAndETotalSalesSoFar >= mAndETotalSalesTarget) {
  mAndERemainingTarget = 0;
}

//Fit out vales
let fitOutTotalSalesSoFar = 51245;
let fitOutTotalSalesTarget = 50875;
let fitOutRemainingTarget = fitOutTotalSalesTarget - fitOutTotalSalesSoFar;
if (fitOutTotalSalesSoFar >= fitOutTotalSalesTarget) {
  fitOutRemainingTarget = 0;
}

//New regions values
let newRegionsTotalSalesSoFar = 46563;
let newRegionsTotalSalesTarget = 61889;
let newRegionsRemainingTarget = newRegionsTotalSalesTarget - newRegionsTotalSalesSoFar;
if (newRegionsTotalSalesSoFar >= newRegionsTotalSalesTarget) {
  newRegionsRemainingTarget = 0;
}

//Men working vales
let constructionMW = 2111;
let mAndEMW = 1204;
let fitOutMW = 829;
let newRegionsMW = 504;

function MenWorkingByDepartment() {
  return (
    <div>
      <h1> Total Men Working - March Week Five </h1>
      <Line
        data={{
          labels: ["Construction", "M&E", "Fit Out", "New Regions"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [constructionMW, mAndEMW, fitOutMW, newRegionsMW],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: lime,
              order: 1,
            },
          ],
        }}
      />
    </div>
  );
}

function NonComp() {
  return (
    <div>
      <h1> Non-Compliance Per Consultant </h1>
      <Line
        data={{
          labels: ["Adam Miller", "Charlotte Carr", "Sarah Sheehan", "Retail", "Lucy Smith"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [2, 5, 5, 3, 2],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: lime,
              order: 1,
            },
          ],
          text: "23%",
        }}
      />
    </div>
  );
}

//Construction graph component
function ConstructionGraph() {
  return (
    <div>
      <h1>Construction Sales - March Week Five</h1>
      <Line
        data={{
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
              data: [29864, 49859, 28548, 25840, 22680, 20118, 12020],

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [28875, 39375, 22500, 30000, 23000, 10125, 11250],
              fill: false,
              borderColor: pink,
            },
          ],
        }}
      />
    </div>
  );
}

//M&E graph component
function MANDEGraph() {
  return (
    <div>
      <h1> M&E Sales - March Week Five </h1>
      <Line
        data={{
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
              data: [58575, 39784, 19739, 3291, 13, 8429, 15205],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [27000, 38250, 20250, 6375, 42550, 9375, 19250],
              fill: false,
              borderColor: pink,
            },
          ],
        }}
      />
    </div>
  );
}

//Fit-out graph component
function FitOutGraph() {
  return (
    <div>
      <h1> Fit Out Sales - March Week Five</h1>
      <Line
        data={{
          labels: ["Charlotte Carr", "Rebecca Colmer"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [35006, 16239],
              borderColor: lime,

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [34375, 16500],
              fill: false,
              borderColor: pink,
              backgroundColor: pink,
            },
          ],
        }}
      />
    </div>
  );
}

//New Regions graph component
function NewRegionsGraph() {
  return (
    <div>
      <h1> New Region Sales - March Week Five</h1>
      <Line
        data={{
          labels: ["Luke Wing", "Marti Pollock", "Will Keenan", "Chris Ransom", "Sam Mondey"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [11077, 9017, 1640, 19411, 5417],
              borderColor: lime,

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [22500, 11000, 11250, 10139, 7000],
              fill: false,
              borderColor: pink,
              backgroundColor: pink,
            },
          ],
        }}
      />
    </div>
  );
}

//NEW REGION MARGIN V BUDGET COMPONENT  - AWAITING NEW DATA FROM WOODY. REMOVE IF THIS NEVER COMES.
/*
function NewRegionMVBGraph() {
  return (
    <div>
      <h1>New Regions - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Margin",
              data: [6435, 8547, 10034],
              borderColor: lime,

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "bar",
              label: "Target",
              data: [7032, 10253, 12378],
              fill: false,
              borderColor: pink,
              backgroundColor: pink,
            },
          ],
        }}
      />
    </div>
  );
}

function MANDEMVBGraph() {
  return (
    <div>
      <h1>M&E - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Budget",
              data: [28008, 30550, 35200],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: pink,
              order: 1,
            },
            {
              type: "bar",
              label: "Actual",
              data: [27000, 33000, 32000],
              fill: false,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: lime,
            },
          ],
        }}
      />
    </div>
  );
}

function ConstructionMVBGraph() {
  return (
    <div>
      <h1>Construction - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Budget",
              data: [31389, 31350, 34000],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: pink,
              order: 1,
            },
            {
              type: "bar",
              label: "Actual",
              data: [27000, 33000, 34000],
              fill: false,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: lime,
            },
          ],
        }}
      />
    </div>
  );
}

function FitOutMVBGraph() {
  return (
    <div>
      <h1>Fit Out - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Budget",
              data: [8867, 9300, 9550],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: pink,
              order: 1,
            },
            {
              type: "bar",
              label: "Actual",
              data: [6860, 7200, 7350],
              fill: false,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: lime,
            },
          ],
        }}
      />
    </div>
  );
}

function LogisticsMVBGraph() {
  return (
    <div>
      <h1>Logistics - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Budget",
              data: [2055, 2000, 2500],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: pink,
              order: 1,
            },
            {
              type: "bar",
              label: "Actual",
              data: [1900, 2300, 2600],
              fill: false,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: lime,
            },
          ],
        }}
      />
    </div>
  );
}

function RetailMVBGraph() {
  return (
    <div>
      <h1>Retail - Margin V Budget</h1>
      <Line
        data={{
          labels: ["January", "Feburary", "March"],
          datasets: [
            {
              type: "bar",
              label: "Budget",
              data: [25952, 26250, 26000],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: pink,
              order: 1,
            },
            {
              type: "bar",
              label: "Actual",
              data: [23000, 25000, 25000],
              fill: false,
              borderColor: "rgb(54, 162, 235)",
              backgroundColor: lime,
            },
          ],
        }}
      />
    </div>
  );
}
*/


export function Graph(props) {
  let [index, setIndex] = useState();

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      8000 // 8 seconds 
    );
    return () => clearTimeout(intervalId);
  }, []);

  switch (index) {
    case 0:
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
            <Doughnut
              data={{
                labels: ["Sales this month", "Target"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [
                      constructionTotalSalesSoFar,
                      constructionRemainingTarget,
                    ],
                    backgroundColor: [green, red],
                    borderColor: [green, red],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      );
    case 1:
      let mAndE = targetPercentage(mAndETotalSalesSoFar, mAndETotalSalesTarget);
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <MANDEGraph />
          </div>
          <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
            <h1>{mAndE}% of target</h1>
            <Doughnut
              data={{
                labels: ["Sales this month", "Target"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [mAndETotalSalesSoFar, mAndERemainingTarget],
                    backgroundColor: [green, red],
                    borderColor: [
                      "rgba(30, 255, 99, 1)",
                      "rgba(255, 50, 50, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      );
    case 2:
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
            <Doughnut
              data={{
                labels: ["Sales this month", "Target"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [fitOutTotalSalesSoFar, fitOutRemainingTarget],
                    backgroundColor: [green, red],
                    borderColor: [
                      "rgba(30, 255, 99, 1)",
                      "rgba(255, 50, 50, 1)",
                    ],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
        </div>
      );
    case 3:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <MenWorkingByDepartment />
          </div>
         
        </div>
      ); 
      case 4:
        let compliancePercentage = 100
        return (
          <div className="grid grid-cols-6 grid-rows-9">
            <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
              <NonComp />
             
            </div>
            <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
            <h1>{compliancePercentage}% compliant</h1>
            <Doughnut
              data={{
                labels: ["Compliance", "Target"],
                datasets: [
                  {
                    label: "# of Votes",
                    data: [100, 0],
                    backgroundColor: [green, red],
                    borderColor: [green, red],
                    borderWidth: 1,
                  },
                ],
              }}
            />
          </div>
          
          </div>
        );
        case 5:
          let newRegionsPercentage = targetPercentage(
            newRegionsTotalSalesSoFar,
            newRegionsTotalSalesTarget
          );
          return (
            <div className="grid grid-cols-6 grid-rows-9">
              <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
                <NewRegionsGraph />
              </div>
              <div className="text-center font-display text-white text-2xl row-start-2 row-span-1 col-start-6 col-span-1">
                <h1>{newRegionsPercentage}% of target</h1>
                <Doughnut
                  data={{
                    labels: ["Sales this month", "Target"],
                    datasets: [
                      {
                        label: "# of Votes",
                        data: [newRegionsTotalSalesSoFar, newRegionsRemainingTarget],
                        backgroundColor: [green, red],
                        borderColor: [
                          "rgba(30, 255, 99, 1)",
                          "rgba(255, 50, 50, 1)",
                        ],
                        borderWidth: 1,
                      },
                    ],
                  }}
                />
              </div>
            </div>
          );

    default:
      setIndex((index) => 0);
      return null;
  }
}

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
} from "chart.js";

import { Pie, Line, Doughnut } from "react-chartjs-2";
import Loader from "../functional/Loader";

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

//declare graph colour scheme CHANGE VAR NAMES
let lime = "rgba(58, 216, 255, 0.7)";
let pink = "rgba(255, 68, 58, 0.7)";

let green = "rgba(137, 255, 58, 0.7)";
let red = "rgba(255, 68, 58, 0.7)";

//declare monthly sales target values. route ALL values through backend when connection is established.

//Construction values - for construction doughnut graph
let constructionTotalSalesSoFar = 34727;
let constructionTotalSalesTarget = 165125;
let constructionRemainingTarget =
  constructionTotalSalesSoFar - constructionTotalSalesTarget;
if (constructionTotalSalesSoFar >= constructionTotalSalesTarget) {
  constructionRemainingTarget = 0;
}

//M&E values
let mAndETotalSalesSoFar = 25636;
let mAndETotalSalesTarget = 163000;
let mAndERemainingTarget = mAndETotalSalesTarget - mAndETotalSalesSoFar;
if (mAndETotalSalesSoFar >= mAndETotalSalesTarget) {
  mAndERemainingTarget = 0;
}

//Fit out vales
let fitOutTotalSalesSoFar = 9286;
let fitOutTotalSalesTarget = 50875;
let fitOutRemainingTarget = fitOutTotalSalesTarget - fitOutTotalSalesSoFar;
if (fitOutTotalSalesSoFar >= fitOutTotalSalesTarget) {
  fitOutRemainingTarget = 0;
}

//Men working vales
let constructionMW = 416;
let mAndEMW = 228;
let fitOutMW = 161;
let newRegionsMW = 103;

function MenWorkingByDepartment() {
  return (
    <div>
      <h1> Total Men Working - Feburary Week Four </h1>
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
      <h1>Construction Sales - March Week One</h1>
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
              data: [5875, 10279, 4836, 3741, 4889, 3948, 1159],

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
      <h1> M&E Sales - March Week One </h1>
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
              data: [7301, 7315, 1492, 4571, 0, 1698, 3260],
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
      <h1> Fit Out Sales - March Week One</h1>
      <Line
        data={{
          labels: ["Charlotte Carr", "Rebecca Colmer"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [6139, 3146],
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

//NEW REGION MARGIN V BUDGET COMPONENT
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

//SWITCHER COMPONENT ----- COMBINE WITH MAIN
export function Graph(props) {
  let [loader, setLoader] = useState(true);
  let [data, setData] = useState();
  let [index, setIndex] = useState();

  const config = {
    headers: {
      Authorization: process.env.REACT_APP_BACKEND_API_KEY,
    },
  };

  useEffect(() => {
    const intervalId = setInterval(
      () => setIndex((index) => index + 1),
      10000 // 20 seconds i think
    );
    return () => clearTimeout(intervalId);
  }, []);
  /*
  const getGraphsFromApi = async () => {
    const response = await fetch(
      "http://localhost:1337/api/departments",
      config
    );
    const responseJson = await response.json();
    console.log("json", responseJson);
    setData(responseJson);
    setLoader(false);
  };
  setTimeout(getGraphsFromApi, 3000);
*/
  console.log(data);
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
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <NewRegionMVBGraph />
          </div>
        </div>
      );
    case 5:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <MANDEMVBGraph />
          </div>
        </div>
      );
    case 6:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <ConstructionMVBGraph />
          </div>
        </div>
      );
    case 7:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <FitOutMVBGraph />
          </div>
        </div>
      );
    case 8:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <LogisticsMVBGraph />
          </div>
        </div>
      );
    case 9:
      return (
        <div className="grid grid-cols-6 grid-rows-9">
          <div className="col-span-5 row-span-2 text-center font-display text-white text-2xl">
            <RetailMVBGraph />
          </div>
        </div>
      );

    default:
      setIndex((index) => 0);
      return null;
  }
}
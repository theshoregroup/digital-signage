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
let lime = "rgba(0, 255, 187, 0.7)";
let blue = "rgba(54, 201, 255, 0.7)";
let pink = "rgba(255, 0, 68, 0.7)";

let green = "rgba(76, 255, 36, 0.7)";
let red = "rgba(255, 0, 68, 0.7)";

//declare monthly sales target values. route ALL values through backend when connection is established.

//Construction values - for construction doughnut graph
let constructionTotalSalesSoFar = 147970;
let constructionTotalSalesTarget = 127900;
let constructionRemainingTarget =
  constructionTotalSalesSoFar - constructionTotalSalesTarget;
if (constructionTotalSalesSoFar >= constructionTotalSalesTarget) {
  constructionRemainingTarget = 0;
}

//M&E values
let mAndETotalSalesSoFar = 174175;
let mAndETotalSalesTarget = 111100;
let mAndERemainingTarget = mAndETotalSalesTarget - mAndETotalSalesSoFar;
if (mAndETotalSalesSoFar >= mAndETotalSalesTarget) {
  mAndERemainingTarget = 0;
}

//Fit out vales
let fitOutTotalSalesSoFar = 39379;
let fitOutTotalSalesTarget = 39600;
let fitOutRemainingTarget = fitOutTotalSalesTarget - fitOutTotalSalesSoFar;
if (fitOutTotalSalesSoFar >= fitOutTotalSalesTarget) {
  fitOutRemainingTarget = 0;
}

//Men working vales
let constructionMW = 1698;
let mAndEMW = 1034;
let fitOutMW = 646;
let newRegionsMW = 387;

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
      <h1>Construction Sales - Feburary Week Three</h1>
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
              data: [24131, 40259, 22249, 21236, 16226, 16226, 7463],

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [21000, 31500, 18000, 24000, 18400, 6000, 9000],
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
      <h1> M&E Sales - Feburary Week Four </h1>
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
              data: [83315, 38602, 15327, 5494, 11050, 10156, 10232],
              borderColor: "rgba(255, 99, 132, 1)",

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [18000, 30600, 14400, 3400, 25500, 6000, 13200],
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
      <h1> Fit Out Sales - Feburary Week Four</h1>
      <Line
        data={{
          labels: ["Charlotte Carr", "Rebecca Colmer"],
          datasets: [
            {
              type: "bar",
              label: "Sales",
              data: [21353, 14622],
              borderColor: lime,

              backgroundColor: lime,
              order: 1,
            },
            {
              type: "line",
              label: "Target",
              data: [25476, 10422],
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
        data={
          {
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

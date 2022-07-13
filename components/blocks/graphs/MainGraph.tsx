import { useRef, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  labels: [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
  ],
  datasets: [
    {
      id: 1,
      label: "margin",
      data: [
        20, 30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170,
        180, 190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310,
      ],
      backgroundColor: "rgba(172, 248, 175, 0.8)",
      borderColor: "rgba(37, 207, 44, 0.8)",
    },
    {
      id: 0,
      label: "target",
      data: [10, 15, 20, 30, 40, 70, 100, 300, 400],
      borderColor: "rgba(255, 24, 35, 0.8)",
      backgroundColor: "rgba(255, 148, 148, 0.8)",
      fill: "start",
    },
  ],
};

const options = {
  plugins: {
    legend: {
      display: false,
    },
  },
  elements: {
    line: {
      tension: 0.5,
      borderWidth: 4,
      fill: "start",
    },
    point: {
      radius: 0,
      hitRadius: 0,
    },
  },
  scales: {
    yAxis: {
      display: false,
    },
  },
};

export default function MainGraph() {
  function getWeekNumber() {
    const today = new Date();
    const firstDayOfYear = new Date(today.getFullYear(), 0, 1);
    // @ts-ignore - no type info for Date.prototype.getTime()
    const pastDaysOfYear = (today - firstDayOfYear) / 86400000;
    return Math.ceil((pastDaysOfYear + firstDayOfYear.getDay()) / 7 - 1);
  }

  return (
    <div className="relative">
      <div className="absolute font-mono m-3 p-2 bg-slate-200 bg-opacity-70 rounded-md">
        <span className="block text-6xl font-bold">
          £{data.datasets[0].data[getWeekNumber() - 1]}
        </span>
        <span>Last week's sales</span>
      </div>
      <div className="h-[30vh]">
        <Line datasetIdKey="id" height={60} options={options} data={data} />
      </div>
    </div>
  );
}

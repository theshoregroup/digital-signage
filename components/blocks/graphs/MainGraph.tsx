import { useRef, useEffect } from "react";
import "chart.js/auto";
import { Line } from "react-chartjs-2";

const data = {
  labels: [28, 29, 30, 31, 32],
  datasets: [
    {
      id: 1,
      label: "margin",
      data: [144444, 144682],
      backgroundColor: "rgba(172, 248, 175, 0.8)",
      borderColor: "rgba(37, 207, 44, 0.8)",
    },
    {
      id: 0,
      label: "target",
      data: [135000, 270000],
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
    xAxis: {
      grid: {
        color: "rgba(255,255,255,0.6)",
      },
    },
  },
  maintainAspectRatio: false,
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
    <div className="">
      <div className="absolute font-mono m-3 p-2 z-10 bg-slate-500 bg-opacity-70 rounded-md">
        <span className="block text-6xl font-bold">
          £{data.datasets[0].data[getWeekNumber() - 1]}
        </span>
        <span>Last week's sales</span>
      </div>
      <div className="block relative h-52 w-full">
        <Line datasetIdKey="id" options={options} data={data} />
      </div>
    </div>
  );
}

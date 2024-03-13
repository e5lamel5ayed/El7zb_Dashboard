import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Country", "Popularity"],
  ["Egypt", 800],
  ["United States", 300],
  ["Brazil", 200],
  ["Canada", 300],
  ["France", 200],
  ["RU", 400],
];


export const options = {
    
    colors : ["#dc1f27"]
  };

export function GeoChart() {
  return (
    <Chart
      chartEvents={[
        {
          eventName: "select",
          callback: ({ chartWrapper }) => {
            const chart = chartWrapper.getChart();
            const selection = chart.getSelection();
            if (selection.length === 0) return;
            const region = data[selection[0].row + 1];
            console.log("Selected : " + region);
          },
        },
      ]}
      chartType="GeoChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}

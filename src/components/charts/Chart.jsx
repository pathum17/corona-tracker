import React, { useState, useEffect } from "react";
import { Line, Chart } from "react-chartjs-2";

import "./Chart.css";

const MyApp = ({ data }) => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    var temp = [];
    if (data instanceof Array) {
      console.log("data length : ");
      console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        temp.push(data[i]);
      }
    }

    setVal(temp);
  }, [data]);

  const lineChart =
    val.length !== 0 ? (
      <Line
        height={400}
        data={{
          labels: val.map(({ date }) => date),
          datasets: [
            {
              data: val.map(({ total }) => total),
              label: "Infected",
              fill: true,
              borderColor: "#3333ff",
            },
            {
              data: val.map(({ recovered }) => recovered),
              label: "Recovered",
              fill: true,
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
            },
            {
              data: val.map(({ deaths }) => deaths),
              label: "Deaths",
              fill: true,
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    ) : null;

  return (
    <div className="chart-container">
      <h4>Daily Development of cases</h4>
      <div className="main-chart">{val ? lineChart : null}</div>
    </div>
  );
};

export default MyApp;

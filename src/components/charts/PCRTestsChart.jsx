import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

import "./Chart.css";

const PCRTestsChart = (data) => {
  const [val, setVal] = useState([]);

  useEffect(() => {
    var temp = [];
    if (data instanceof Array) {
      console.log("PCRTestsChart data length : ");
      console.log(data.length);
      for (var i = 0; i < data.length; i++) {
        temp.push(data[i]);
      }
    }
    if (data instanceof Object) {
      console.log("PCRTestsChart Object ");
    }
    setVal(temp);
  }, [data]);

  const barChart =
    val.length !== 0 ? (
      <Bar
        height={400}
        data={{
          labels: val.map(({ date }) => date),
          datasets: [
            {
              data: val.map(({ count }) => count),
              label: "Daily PCR tests",
              fill: true,
              borderColor: "#3333ff",
            },
          ],
        }}
        options={{ maintainAspectRatio: false }}
      />
    ) : null;

  return (
    <div className="chart-container">
      <h4>Daily PCR Tests</h4>
      <div className="main-chart">{val ? barChart : null}</div>
    </div>
  );
};

export default PCRTestsChart;

import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";

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
    /*
    setTimeout(function () {
      console.log("running timeout");
    }, 1000);
*/
    if (val instanceof Array) {
      console.log("val length : ");
      console.log(val.length);
      for (var j = 0; j < val.length; j++) {
        console.log(val[j]);
      }
    }
  }, [data]);

  const lineChart =
    val.length !== 0 ? (
      <Line
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
              data: val.map(({ deaths }) => deaths),
              label: "Deaths",
              fill: true,
              borderColor: "red",
              backgroundColor: "rgba(255, 0, 0, 0.5)",
            },

            {
              data: val.map(({ recovered }) => recovered),
              label: "Recovered",
              fill: true,
              borderColor: "green",
              backgroundColor: "rgba(0, 255, 0, 0.5)",
            },
          ],
        }}
      />
    ) : null;

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        alignContent: "center",
      }}
    >
      <h4>Daily Development of cases</h4>

      <div
        style={{
          width: "600px",
          height: "350px",
          textAlign: "center",
          display: "inline-block",
        }}
      >
        {val ? lineChart : null}
      </div>
    </div>
  );
};

export default MyApp;

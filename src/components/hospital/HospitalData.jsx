import React, { useState, useEffect } from "react";

import "./HospitalData.css";

const HospitalData = ({ data }) => {
  const [hospitalData, setHospitalData] = useState([]);
  const [totalAdmissions, setTotalAdmissions] = useState(0);
  const [totalTests, setTtotalTests] = useState(0);

  useEffect(() => {
    var temp = [];
    if (data instanceof Array) {
      for (var i = 0; i < data.length; i++) {
        temp.push(data[i]);
      }
    }

    setHospitalData(temp);

    let admissions = temp.reduce(function (sum, element) {
      return sum + element.treatment_total;
    }, 0);

    setTotalAdmissions(admissions);

    let tests = temp.reduce(function (sum, element) {
      return sum + element.cumulative_total;
    }, 0);

    setTtotalTests(tests);
  }, [data]);

  return (
    <div class="table-responsive-md table-container">
      <h2>Hospital data</h2>
      <table className="table table-hover table-bordered table-striped table-adjust ">
        <thead>
          <tr>
            <th>Hospital</th>
            <th>Total Tests</th>
            <th>No. of Admissions</th>
          </tr>
        </thead>
        <tbody>
          {hospitalData.map((element) => (
            <tr key={element.id}>
              <td>{element.hospital.name} </td>
              <td>{element.cumulative_total}</td>
              <td>{element.treatment_total}</td>
            </tr>
          ))}
          <tr>
            <td>
              <b>Total</b>
            </td>
            <td>
              <b>{totalTests}</b>
            </td>
            <td>
              <b>{totalAdmissions}</b>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default HospitalData;

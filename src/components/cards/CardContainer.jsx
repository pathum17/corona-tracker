import React from "react";
import { useState, useEffect } from "react";
import { Typography } from "@material-ui/core";

import CaseCard from "./CaseCard";
import Header from "./Header";

const CardContainer = ({
  fetchedData: {
    local_total_cases,
    local_active_cases,
    local_new_cases,
    local_recovered,
    local_deaths,
    local_new_deaths,
    local_total_number_of_individuals_in_hospitals,
    total_pcr_testing_count,
    update_date_time,
  },
}) => {
  const activeCardTitle = "Active Cases";
  const newCardTitle = "New Cases";
  const totalCardTitle = "Total Cases";
  const recoveredCardTitle = "Recovered";
  const deathsCardTitle = "Total Deaths";
  const newDeathsCardTitle = "New Deaths";
  const patientsInHospitalsCardTitle = "Patients In Hospitals";
  const pcrTestCountCardTitle = "Total No. PCR Tests";
  const [activeCases, setActiveCases] = useState(0);
  const [newCases, setNewCases] = useState(0);
  const [totalCases, setTotalCases] = useState(0);
  const [recoveredCases, setRecoveredCases] = useState(0);
  const [totalDeathCases, setTotalDeathCases] = useState(0);
  const [newDeathCases, setNewDeathCases] = useState(0);
  const [patientsInHospitals, setPatientsInHospitals] = useState(0);
  const [pcrTestCount, setPcrTestCount] = useState(0);
  const [updatedDate, setUpdatedDate] = useState("");

  //const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setActiveCases(local_active_cases);
    setNewCases(local_new_cases);
    setTotalCases(local_total_cases);
    setRecoveredCases(local_recovered);
    setTotalDeathCases(local_deaths);
    setNewDeathCases(local_new_deaths);
    setPatientsInHospitals(local_total_number_of_individuals_in_hospitals);
    setPcrTestCount(total_pcr_testing_count);
    setUpdatedDate(update_date_time);
  }, [
    local_total_cases,
    local_active_cases,
    local_new_cases,
    local_recovered,
    local_deaths,
    local_new_deaths,
    local_total_number_of_individuals_in_hospitals,
    total_pcr_testing_count,
    update_date_time,
  ]);

  return (
    <div>
      <Header />
      <div style={{ textAlign: "center" }}>
        <Typography className="card-header" color="textSecondary">
          Data updated on {updatedDate}
        </Typography>
      </div>
      <div className="container">
        <div className="gridContainer">
          <CaseCard
            value={newCases}
            title={newCardTitle}
            applyStyle="infected"
          />
          <CaseCard
            value={totalCases}
            title={totalCardTitle}
            applyStyle={"infected"}
          />
          <CaseCard
            value={activeCases}
            title={activeCardTitle}
            applyStyle={"infected"}
          />
          <CaseCard
            value={totalDeathCases}
            title={deathsCardTitle}
            applyStyle={"deaths"}
          />
        </div>
        <div className="gridContainer">
          <CaseCard
            value={newDeathCases}
            title={newDeathsCardTitle}
            applyStyle={"deaths"}
          />
          <CaseCard
            value={recoveredCases}
            title={recoveredCardTitle}
            applyStyle={"recovered"}
          />
          <CaseCard
            value={patientsInHospitals}
            title={patientsInHospitalsCardTitle}
            applyStyle={"infected"}
          />
          <CaseCard
            value={pcrTestCount}
            title={pcrTestCountCardTitle}
            applyStyle={"recovered"}
          />
        </div>
      </div>
    </div>
  );
};

export default CardContainer;

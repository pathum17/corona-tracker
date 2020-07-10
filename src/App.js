import React from "react";
import { fetchData, fetchDailyData } from "./api";

import CardContainer from "./components/cards/CardContainer";
import Chart from "./components/charts/Chart";
import PCRTestsChart from "./components/charts/PCRTestsChart";
import HospitalData from "./components/hospital/HospitalData";
import styles from "./App.module.css";

class App extends React.Component {
  state = {
    data: {},
    dailyData: {},
    hospitalData: {},
  };

  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({ data: fetchedData.data });
    console.log(this.state.data);
    const fetchedDailyData = await fetchDailyData();

    this.setState({ dailyData: fetchedDailyData.data });
    // console.log(this.state.dailyData);
    this.setState({ hospitalData: fetchedData.data.hospital_data });
    //console.log(this.state.hospitalData);
  }

  render() {
    const { data } = this.state;
    const { dailyData } = this.state;
    const { hospitalData } = this.state;
    console.log(hospitalData);
    return (
      <div className={styles.container}>
        <CardContainer fetchedData={data} />
        <Chart data={dailyData} />
        <PCRTestsChart data={dailyData.daily_pcr_testing_data} />
        <HospitalData data={hospitalData} />
      </div>
    );
  }
}

export default App;

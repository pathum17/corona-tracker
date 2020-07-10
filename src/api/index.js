import axios from "axios";

const url = "https://hpb.health.gov.lk/api/get-current-statistical";

export const fetchData = async (country) => {
  try {
    let changebleURL = url;
    if (country && country !== "global") {
      changebleURL = `${url}/countries/${country}`;
    }

    const { data } = await axios.get(changebleURL);

    const fetchedData = {
      data: data.data,
    };

    return fetchedData;
  } catch (error) {
    console.log(error);
  }
};

const dailyDataURL =
  "https://91spi9ytlc.execute-api.ap-southeast-2.amazonaws.com/production/dailydata";

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(dailyDataURL);

    const modifiedData = {
      data: JSON.parse(data),
    };

    return modifiedData;
  } catch (error) {
    console.log(error);
  }
};

export const fetchCountries = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(`${url}/countries`);

    const modifiedData = countries.map((country) => country.name);
    console.log(modifiedData);
    return modifiedData;
  } catch (error) {}
};

import axios from "axios";

const url = " https://covid19.mathdro.id/api";

export async function getData() {
    try {
        // destructure the data key from response, then destructure the four
        // fields within data
        let {
            data: { confirmed, recovered, deaths, lastUpdate }
        } = await axios.get(url);

        // return a new object containing only these four fields
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (e) {
        console.log(e);
    }
}

export async function getDailyData() {
    try {
        // returns an array of daily data objects
        const { data } = await axios.get(`${url}/daily`);

        // only take what we need from each daily data object
        const modifiedData = data.map(daily => ({
            confirmed: daily.totalConfirmed,
            deaths: daily.deaths.total,
            date: daily.reportDate
        }));

        return modifiedData;
    } catch (e) {
        console.log(e);
    }
}

import axios from "axios";

const url = " https://covid19.mathdro.id/api";

async function getData() {
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

export default getData;

import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";

import { getData, getDailyData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
    state = { data: {} };

    async componentDidMount() {
        let fetchedData = await getData();
        let dailyData = await getDailyData();
        this.setState({ data: fetchedData });
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <Chart />
            </div>
        );
    }
}

export default App;

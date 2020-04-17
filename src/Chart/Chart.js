import React, { useState, useEffect } from "react";
import styles from "./Chart.module.css";
import { getDailyData } from "../api";
import { Line, Bar } from "react-chartjs-2";

function Chart() {
    const [dailyData, setDailyData] = useState({});

    useEffect(() => {
        // get daily data and set it to state
        (async () => setDailyData(await getDailyData()))();
    }, []);

    const lineChart = dailyData.length ? (
        <Line
            data={{
                labels: dailyData.map(x => x.date),
                datasets: [
                    {
                        label: "Total infected",
                        data: dailyData.map(x => x.confirmed),
                        borderColor: "rgba(255,204,84,100)",
                        borderWidth: 2,
                        backgroundColor: "rgba(255,204,84,0.2)",
                        fill: true
                    },
                    {
                        label: "Total deaths",
                        data: dailyData.map(x => x.deaths),
                        borderColor: "rgba(179,28,23,100)",
                        borderWidth: 2,
                        backgroundColor: "rgba(179,28,23,0.3)",
                        fill: true
                    }
                ]
            }}
        />
    ) : null;

    return <div className={styles.container}>{lineChart}</div>;
}

export default Chart;

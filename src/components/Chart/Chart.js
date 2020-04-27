import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import styles from "./Chart.module.css";
import { getDailyData, getCountryData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

const mapState = state => {
    console.log(state);
    return { country: state };
};

function Chart(props) {
    const [dailyData, setDailyData] = useState({});
    const [countryData, setCountryData] = useState({});

    useEffect(() => {
        // get daily data and set it to state
        if (props.country === "global") {
            (async () => setDailyData(await getDailyData()))();
        } else {
            (async () => setCountryData(await getCountryData(props.country)))();
        }
    }, [props.country]);

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

    const barChart = (
        <Bar
            data={{
                labels: Object.keys(countryData),
                datasets: [
                    {
                        data: Object.values(countryData),
                        backgroundColor: [
                            "rgba(255,204,84,0.3)",
                            "rgba(118, 190, 255, 0.3)",
                            "rgba(179,28,23,0.3)"
                        ],
                        borderColor: [
                            "rgba(255,204,84,0.8)",
                            "rgba(118, 190, 255, 0.8)",
                            "rgba(179,28,23,0.8)"
                        ],
                        hoverBackgroundColor: [
                            "rgba(255,204,84,0.6)",
                            "rgba(118, 190, 255, 0.6)",
                            "rgba(179,28,23,0.6)"
                        ],
                        hoverBorderColor: [
                            "rgba(255,204,84,1)",
                            "rgba(118, 190, 255, 1)",
                            "rgba(179,28,23,1)"
                        ],
                        borderWidth: 1,
                        hoverBorderWidth: 2
                    }
                ]
            }}
            options={{
                legend: { display: false }
            }}
        />
    );

    if (props.country === "global") {
        console.log(dailyData);
        return <div className={styles.container}>{lineChart}</div>;
    } else {
        console.log(countryData);
        return <div className={styles.container}>{barChart}</div>;
    }
}

export default connect(mapState)(Chart);

import React from "react";
import Cards from "./Cards/Cards";
import Chart from "./Chart/Chart";
import CountrySelector from "./CountrySelector/CountrySelector";

import { getData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = { data: {}, country: "global" };
        this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        let fetchedData = await getData();
        this.setState({ data: fetchedData });
    }

    handleChange(e) {
        var newValue = e.target.value;
        console.log(newValue.toLowerCase());
        this.setState({ country: newValue.toLowerCase() });
    }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountrySelector handleChange={this.handleChange} />
                <Chart country={this.state.country} />
            </div>
        );
    }
}

export default App;

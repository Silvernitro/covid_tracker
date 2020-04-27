import React from "react";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";

import { getData } from "./api";
import styles from "./App.module.css";

class App extends React.Component {
    constructor(props) {
        super();
        this.state = { data: {} };
        // this.handleChange = this.handleChange.bind(this);
    }

    async componentDidMount() {
        let fetchedData = await getData();
        this.setState({ data: fetchedData });
    }

    //     handleChange(e) {
    //         var newValue = e.target.value;
    //         console.log(newValue.toLowerCase());
    //         this.setState({ country: newValue.toLowerCase() });
    //     }

    render() {
        return (
            <div className={styles.container}>
                <Cards data={this.state.data} />
                <CountrySelector />
                <Chart />
            </div>
        );
    }
}

export default App;

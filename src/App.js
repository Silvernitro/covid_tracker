import React from "react";
import Cards from "./Cards/Cards";

import getData from "./api";

class App extends React.Component {
    state = { data: {} };

    async componentDidMount() {
        let fetchedData = await getData();
        this.setState({ data: fetchedData });
    }

    render() {
        return (
            <div>
                <h1>App</h1>
                <Cards data={this.state.data} />
            </div>
        );
    }
}

export default App;

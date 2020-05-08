import React, { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/actions";
import { Route, Switch } from "react-router-dom";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";
import ComparisonTool from "./components/ComparisonTool/ComparisonTool";
import About from "./components/About/AboutPage";

function App(props) {
  // const [data, setData] = useState({});
  const fetchData = props.fetchData;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <NavBar />
      <Switch>
        <Route path="/compare">
          <ComparisonTool />
        </Route>

        <Route path="/about">
          <About />
        </Route>

        <Route path="/">
          <Cards />
          <CountrySelector />
          <Chart />
        </Route>
      </Switch>
    </div>
  );
}

export default connect(null, { fetchData })(App);

// export default App;

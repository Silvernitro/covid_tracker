import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "./redux/actions";
import styles from "./App.module.css";
import NavBar from "./components/NavBar/NavBar";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";

function App(props) {
  // const [data, setData] = useState({});
  const fetchData = props.fetchData;

  useEffect(() => {
    // (async () => setData(await getData()))();
    fetchData();
  }, [fetchData]);

  return (
    <div className={styles.container}>
      <NavBar />
      <Cards />
      <CountrySelector />
      <Chart />
    </div>
  );
}

export default connect(null, { fetchData })(App);

// export default App;

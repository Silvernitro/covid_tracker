import React, { useState, useEffect } from "react";
import { getData } from "./api";
import styles from "./App.module.css";
import Cards from "./components/Cards/Cards";
import Chart from "./components/Chart/Chart";
import CountrySelector from "./components/CountrySelector/CountrySelector";

// class App extends React.Component {
//   constructor(props) {
//     super();
//     this.state = { data: {} };
//   }

//   async componentDidMount() {
//     let fetchedData = await getData();
//     this.setState({ data: fetchedData });
//   }

//   render() {
//     return (
//       <div className={styles.container}>
//         <Cards data={this.state.data} />
//         <CountrySelector />
//         <Chart />
//       </div>
//     );
//   }
// }

function App(props) {
  const [data, setData] = useState({});

  useEffect(() => {
    (async () => setData(await getData()))();
  });

  return (
    <div className={styles.container}>
      <Cards data={data} />
      <CountrySelector />
      <Chart />
    </div>
  );
}

export default App;

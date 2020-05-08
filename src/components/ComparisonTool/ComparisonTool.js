import React, { useState, useEffect } from "react";
import CardGrid from "./CardGrid";
import { getCountries } from "../../api";
import "./ComparisonTool.css";

function ComparisonTool(props) {
  const [input, setInput] = useState("");
  const [selected, setSelected] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => setCountries(await getCountries()))();
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      event.preventDefault();
      let input = event.target.value;
      if (!countries.includes(input)) {
        console.log("invalid country");
      } else {
        setSelected([...selected, event.target.value]);
        setInput("");
      }
    }
  };

  const handleDelete = (country) => {
    console.log("deleting");
    setSelected(selected.filter((x) => x !== country));
  };

  return (
    <div className="container">
      <div>
        <form>
          <input
            type="text"
            value={input}
            placeholder="search for country"
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            className="searchBar"
          />
        </form>
      </div>
      <CardGrid countries={selected} handleDelete={handleDelete} />
    </div>
  );
}

export default ComparisonTool;

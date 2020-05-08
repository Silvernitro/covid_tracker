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
      setInput("");
      if (!countries.includes(input)) {
        event.target.placeholder = "Invalid country";
      } else {
        setSelected([...selected, event.target.value]);
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
            onFocus={(e) => (e.target.placeholder = "")}
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

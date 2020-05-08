import React from "react";
import CountryCard from "./CountryCard";
import "./ComparisonTool.css";

function CardGrid(props) {
  const cards = props.countries.map((country) => {
    return (
      <CountryCard
        country={country}
        key={country}
        handleDelete={props.handleDelete}
      />
    );
  });

  return <div className="grid">{cards}</div>;
}

export default CardGrid;

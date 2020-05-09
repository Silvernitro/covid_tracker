import React from "react";
import PropTypes from "prop-types";
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

CardGrid.propTypes = {
  country: PropTypes.arrayOf(PropTypes.string),
};

export default CardGrid;

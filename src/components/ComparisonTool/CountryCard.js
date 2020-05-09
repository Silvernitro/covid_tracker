import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { getCountryData } from "../../api";
import "./ComparisonTool.css";

function CountryCard(props) {
  const [countryData, setCountryData] = useState({});

  useEffect(() => {
    (async () => setCountryData(await getCountryData(props.country)))();
  }, [props.country]);

  return (
    <div className="card">
      <button
        onClick={() => props.handleDelete(props.country)}
        className="deleteButton"
      >
        x
      </button>
      <h4>{props.country}</h4>
      <p>Total confirmed: {countryData.confirmed}</p>
      <p>Total recovered: {countryData.recovered}</p>
      <p>Total deaths: {countryData.deaths}</p>
    </div>
  );
}

CountryCard.propTypes = {
  country: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default CountryCard;

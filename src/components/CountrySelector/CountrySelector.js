import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeCountry } from "../../redux/actions";
import { Select, MenuItem } from "@material-ui/core";
import { getCountries } from "../../api";
import cx from "classnames";
import styles from "./CountrySelector.module.css";

function CountrySelector(props) {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    (async () => setCountries(await getCountries()))();
  }, []);

  {
    let countryItems = countries.map((x) => <MenuItem value={x}>{x}</MenuItem>);

    function handleChange(e) {
      props.changeCountry(e.target.value);
    }

    return (
      <div className={styles.container}>
        <Select
          value={props.country}
          onChange={handleChange}
          className={cx(styles.select, styles.selector)}
        >
          <MenuItem value="global">Global</MenuItem>
          {countryItems}
        </Select>
      </div>
    );
  }
}

const mapState = ({ country }) => ({ country });

export default connect(mapState, { changeCountry })(CountrySelector);

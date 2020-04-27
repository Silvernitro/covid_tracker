import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { changeCountry } from "../../redux/actions";
import { Select, MenuItem } from "@material-ui/core";
import { getCountries } from "../../api";
import cx from "classnames";
import styles from "./CountrySelector.module.css";

function CountrySelector(props) {
    const [countries, setCountries] = useState([]);
    const [currentCountry, setCurrentCountry] = useState("global");

    useEffect(() => {
        (async () => setCountries(await getCountries()))();
    }, []);

    {
        let countryItems = countries.map(x => (
            <MenuItem value={x}>{x}</MenuItem>
        ));

        function handleChange(e) {
            setCurrentCountry(e.target.value);
            props.changeCountry(e.target.value);
            // props.handleChange(e);
        }

        return (
            <div className={styles.container}>
                <Select
                    value={currentCountry}
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

export default connect(null, { changeCountry })(CountrySelector);

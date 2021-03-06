import React from "react";
import { Card, CardContent, Grid, Typography } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./Cards.module.css";
import { connect } from "react-redux";

function Cards(props) {
  if (!props.data.confirmed) {
    return "loading";
  }

  let { confirmed, recovered, deaths, lastUpdate } = props.data;

  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.infected)}
        >
          <CardContent color="primary">
            <Typography>Infected</Typography>
            <Typography variant="h5">
              <CountUp end={confirmed.value} separator={","} />
            </Typography>
            <Typography>Last updated:</Typography>
            <Typography>{new Date(lastUpdate).toUTCString()}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.recovered)}
        >
          <CardContent color="primary">
            <Typography>Recovered</Typography>
            <Typography variant="h5">
              <CountUp end={recovered.value} separator={","} />
            </Typography>
            <Typography>Last updated:</Typography>
            <Typography>{new Date(lastUpdate).toUTCString()}</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          xs={12}
          md={3}
          component={Card}
          className={cx(styles.card, styles.deaths)}
        >
          <CardContent color="primary">
            <Typography>Deaths</Typography>
            <Typography variant="h5">
              <CountUp end={deaths.value} separator={","} />
            </Typography>
            <Typography>Last updated:</Typography>
            <Typography>{new Date(lastUpdate).toUTCString()}</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

const mapState = ({ data }) => ({ data });

export default connect(mapState)(Cards);

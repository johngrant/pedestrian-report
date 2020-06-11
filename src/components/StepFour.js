import React from "react";
import PropTypes from "prop-types";
import Map from "./Map";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

export default function StepFour({ previous, next, coords, setCoords }) {
  const classes = useStyles();

  return (
    <section>
      <Typography variant="h5">Your Location</Typography>
      <br></br>
      <Map coords={coords} setCoords={setCoords}></Map>
      <br></br>
      <div className={classes.root}>
        <Button color="primary" variant="contained" onClick={previous}>
          &lt; Previous
        </Button>
        <Button color="primary" variant="contained" onClick={next}>
          Next &gt;
        </Button>
      </div>
    </section>
  );
}

StepFour.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
  coords: PropTypes.object.isRequired,
  setCoords: PropTypes.func.isRequired,
};

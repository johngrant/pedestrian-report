import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Map from "./Map";

export default function StepFour({ previous, next }) {
  return (
    <Fragment>
      <h1>Your Location</h1>
      <Map></Map>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </Fragment>
  );
}

StepFour.propTypes = {
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

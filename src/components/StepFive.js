import React, { Fragment } from "react";
import PropTypes from "prop-types";

export default function StepFive({ previous }) {
  return (
    <Fragment>
      <h1>Review your report details.</h1>
      <button onClick={previous}>Previous</button>
      <button>Send!</button>
    </Fragment>
  );
}

StepFive.propTypes = {
  previous: PropTypes.func.isRequired,
  send: PropTypes.func.isRequired,
};

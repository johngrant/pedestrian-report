import React from "react";
import PropTypes from "prop-types";

export default function StepOne({ next }) {
  return (
    <section>
      <h1>Welcome Pedestrian!</h1>
      <br></br>
      <p>
        You can use this app to report unsafe pedestrian conditions. Tap Next to
        get started.
      </p>
      <button onClick={next}>Next</button>
    </section>
  );
}

StepOne.propTypes = {
  next: PropTypes.func.isRequired,
};

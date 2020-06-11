import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

export default function StepOne({ next }) {
  return (
    <section>
      <Typography variant="h5">Welcome Pedestrian!</Typography>
      <br></br>
      <p>
        You can use this app to report unsafe pedestrian conditions. Tap Next to
        get started.
      </p>
      <br></br>
      <Button color="primary" variant="contained" onClick={next}>
        Next
      </Button>
    </section>
  );
}

StepOne.propTypes = {
  next: PropTypes.func.isRequired,
};

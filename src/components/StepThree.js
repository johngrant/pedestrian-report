import React from "react";
import PropTypes from "prop-types";
import CameraPreview from "./CameraPreview";
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
export default function StepThree({
  dataUri,
  handleTakePhotoAnimationDone,
  previous,
  next,
}) {
  const classes = useStyles();

  return (
    <section>
      <Typography variant="h5">Take photo of the sidewalk or road.</Typography>
      <br></br>
      <CameraPreview
        dataUri={dataUri}
        handleTakePhotoAnimationDone={handleTakePhotoAnimationDone}
      ></CameraPreview>
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

StepThree.propTypes = {
  dataUri: PropTypes.string.isRequired,
  handleTakePhotoAnimationDone: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

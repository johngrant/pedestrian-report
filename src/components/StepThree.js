import React, { Fragment } from "react";
import PropTypes from "prop-types";
import CameraPreview from "./CameraPreview";

export default function StepThree({
  dataUri,
  handleTakePhotoAnimationDone,
  previous,
  next,
}) {
  return (
    <Fragment>
      <h1>Snap a photo of the condition you see.</h1>
      <CameraPreview
        dataUri={dataUri}
        handleTakePhotoAnimationDone={handleTakePhotoAnimationDone}
      ></CameraPreview>
      <button onClick={previous}>Previous</button>
      <button onClick={next}>Next</button>
    </Fragment>
  );
}

StepThree.propTypes = {
  dataUri: PropTypes.string.isRequired,
  handleTakePhotoAnimationDone: PropTypes.func.isRequired,
  previous: PropTypes.func.isRequired,
  next: PropTypes.func.isRequired,
};

import React from "react";
import PropTypes from "prop-types";
import Camera from "./Camera";
import Preview from "./Preview";

function CameraPreview({ dataUri, handleTakePhotoAnimationDone }) {
  return (
    <section>
      {dataUri ? (
        <Preview dataUri={dataUri}></Preview>
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
        ></Camera>
      )}
    </section>
  );
}

function areEqual(prevProps, nextProps) {
  return prevProps.dataUri === nextProps.dataUri;
}

CameraPreview.propTypes = {
  dataUri: PropTypes.string.isRequired,
  handleTakePhotoAnimationDone: PropTypes.func.isRequired,
};

export default React.memo(CameraPreview, areEqual);

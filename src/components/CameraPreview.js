import React from "react";
import PropTypes from "prop-types";
import Camera from "./Camera";
import Preview from "./Preview";

function CameraPreview({ dataUri, handleTakePhotoAnimationDone }) {
  return (
    <div>
      {dataUri ? (
        <Preview dataUri={dataUri}></Preview>
      ) : (
        <Camera
          onTakePhotoAnimationDone={handleTakePhotoAnimationDone}
        ></Camera>
      )}
    </div>
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

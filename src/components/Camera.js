import React from "react";
import { Camera as CameraInternal } from "react-html5-camera-photo";
import "react-html5-camera-photo/build/css/index.css";
import PropTypes from "prop-types";

export default function Camera({ onTakePhotoAnimationDone }) {
  return (
    <div>
      <CameraInternal
        idealResolution={{ width: 320, height: 480 }}
        onTakePhoto={(dataUri) => console.info({ dataUri })}
        onTakePhotoAnimationDone={onTakePhotoAnimationDone}
      ></CameraInternal>
    </div>
  );
}

Camera.propTypes = {
  onTakePhotoAnimationDone: PropTypes.func,
};

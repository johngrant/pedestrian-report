import React from "react";
import PropTypes from "prop-types";

export default function Preview({ dataUri }) {
  return <img src={dataUri} alt="Street" />;
}

Preview.propTypes = {
  dataUri: PropTypes.string,
};

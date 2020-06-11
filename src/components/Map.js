import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const containerStyle = {
  width: "325px",
  height: "460px",
  margin: "0 auto",
  position: "relative",
};

function MapContainer(props) {
  const [isMounted, setIsMounted] = useState(false);
  const { coords } = props;

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted) {
    return (
      <div className="app__map-container">
        <Map
          initialCenter={coords}
          containerStyle={containerStyle}
          google={props.google}
          zoom={15}
          center={coords}
        >
          <Marker position={coords}></Marker>
        </Map>
      </div>
    );
  } else return null;
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: props.language,
}))(MapContainer);

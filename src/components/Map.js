import React, { useEffect, useState } from "react";
//import PropTypes from "prop-types";
import { GoogleApiWrapper, Map, Marker } from "google-maps-react";

const containerStyle = {
  width: "325px",
  height: "650px",
  margin: "0 auto",
  position: "relative",
};

const _coords = {
  lat: 40.758896,
  lng: -73.98513,
};

function MapContainer(props) {
  const [isMounted, setIsMounted] = useState(false);
  const [coords, setCoords] = useState(_coords);
  navigator.geolocation.getCurrentPosition((position) => {
    setCoords({
      lat: position.coords.latitude,
      lng: position.coords.longitude,
    });
  });

  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (isMounted) {
    return (
      <section className="app__map-container">
        <Map
          initialCenter={coords}
          containerStyle={containerStyle}
          google={props.google}
          zoom={15}
          center={coords}
        >
          <Marker position={coords}></Marker>
        </Map>
      </section>
    );
  } else return null;
}

export default GoogleApiWrapper((props) => ({
  apiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  language: props.language,
}))(MapContainer);

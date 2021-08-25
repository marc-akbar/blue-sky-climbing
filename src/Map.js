import React, { useState } from "react";
import GoogleMapReact from "google-map-react";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const Map = ({ defaultProps }) => {
  const [selectedPlace, setSelectedPlace] = useState({});

  return (
    <div style={{ height: "100vh", width: "100%" }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_MAPS_API_KEY }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
        onClick={(e) => setSelectedPlace(e)}
      >
        <AnyReactComponent
          lat={defaultProps.center.lat}
          lng={defaultProps.center.lng}
          text="My Marker"
        />
        <AnyReactComponent
          lat={selectedPlace.lat}
          lng={selectedPlace.lng}
          text="Selected Loc"
        />
      </GoogleMapReact>
    </div>
  );
};

export default Map;

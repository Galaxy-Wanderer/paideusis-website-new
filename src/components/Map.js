import React, { useState } from "react";
import ReactMapGL, { Marker } from "react-map-gl";
import marker from '../images/marker.png';


const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 47.13590295,
    longitude: 27.58288553,
    width: "100%",
    height: '50vh',
    zoom: 15,
  })

  return (
    <div style={{ border: "2px solid #ccc", width: '100%', height: '50vh' }}>
      <ReactMapGL
        {...viewport}
        mapStyle='mapbox://styles/denisdeveloper/ckf9l24dv6gqg19ql9dnhbsby'
        mapboxApiAccessToken={process.env.REACT_APP_MAP_KEY}
        onViewportChange={(viewport) => setViewport(viewport)}
      >
        <Marker
          latitude={47.13580295}
          longitude={27.58288553}
          offsetTop={-50}
          offsetLeft={-25}
        >
          <img src={marker} className='marker' alt="marker" />
        </Marker>
      </ReactMapGL>
    </div>
  )
}

export default Map

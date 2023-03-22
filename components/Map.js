import {useState } from "react";
import ReactMapGL, {
  } from "react-map-gl";
 


const Map = () => {
    

    return (
        
        <ReactMapGL
            mapStyle="mapbox://styles/vahidnesro/clfj29gzs000801o9jsa0ik4c"
            mapboxAccessToken={process.env.mapbox_key}
   
            initialViewState={{
                longitude: 8.651489839253975, 
                latitude: 53.166957392537064, 
                zoom: 15
              }}
      
            ></ReactMapGL>
        
        
    )
}

export default Map
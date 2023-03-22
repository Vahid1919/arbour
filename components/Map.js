import { useRef, useState } from "react";
import ReactMapGL, {
    Marker,
    Popup,
    NavigationControl,
    FullscreenControl
  } from "react-map-gl";
 


const Map = () => {
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"90%",
        latitude: 46, 
        longitude: -79, 
        zoom: 8 })


    return (
        
        <ReactMapGL
            mapStyle="mapbox://styles/vahidnesro/clfj29gzs000801o9jsa0ik4c"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(viewport) => {setViewport(viewport)}}
            // ref={(instance) => (mapRef.current = instance)}
            
            ></ReactMapGL>
        
        
    )
}

export default Map
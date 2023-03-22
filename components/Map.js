import { useRef, useState } from "react";
import ReactMapGL from "react-map-gl";
 


const Map = () => {
//     const mapRef = useRef(null)
    const [viewport, setViewport] = useState({
        width:"100%",
        height:"100%",
         latitude: 46, 
         longitude: -79, 
         zoom: 10 })


    return (

        <ReactMapGL
            mapStyle="mapbox://styles/vahidnesro/clfj29gzs000801o9jsa0ik4c"
            mapboxAccessToken={process.env.mapbox_key}
            {...viewport}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            // ref={(instance) => (mapRef.current = instance)}
            ></ReactMapGL>
    )
}

export default Map
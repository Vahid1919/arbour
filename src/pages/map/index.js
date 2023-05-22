import styles from "@/styles/MapView.module.css"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import Image from 'next/image'
import ReactMapGL, { Marker } from "react-map-gl";
import { useEffect } from "react";
import Router from "next/router"
import { useSession} from "next-auth/react"



const Map = ({ trees }) => {
  const { status, data } = useSession()
    useEffect(() => {
        if (status === "unauthenticated"){
            Router.replace("/auth/login")
        } 

    }, [status])

    console.log([status, data])


  return (
    <>
      <Header showCredits={true} hasNotifications={false} />
      <div className={styles.main}>
        <p className={styles.description}>This is a live map showing all the trees that have been planted through Arbour.</p>

        <div className={styles.map}>
          <ReactMapGL
            mapStyle="mapbox://styles/vahidnesro/clfj29gzs000801o9jsa0ik4c"
            mapboxAccessToken={process.env.mapbox_key}

            initialViewState={{
              longitude: 8.6466,
              latitude: 53.1630,
              zoom: 13
            }}

          >



            {
              trees.map((tree, index) =>
              (<Marker key={index} longitude={tree.longitude} latitude={tree.latitude} anchor="center" >
                <Image alt="Tree logo" src="/tree.png" width={50} height={50} />
              </Marker>)
              )
            }

          </ReactMapGL>

        </div>

      </div>



      <Nav currentPage={"Map"} />
    </>

  )
}



export default Map

export const getStaticProps = async () => {
  console.log("started plant get static props")
  const res = await fetch('https://mocki.io/v1/f9d6ad99-4cfe-4999-9315-ced1d2447adb')
  const trees = await res.json()
  return {
    props: {
      trees
    }
  }
}
import styles from "@/styles/MapView.module.css"
import Map from "../../../components/Map"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"


const setCurrentPage = () => {
    return ""
}


const MapView = (plants) => {
    console.log(plants)

    return (
        <>
            <Header page="Arbour" />
            <div className={styles.main}>
                <p className={styles.description}>This is a live map showing all the trees that have been planted through Arbour.</p>

                <span className={styles.buttons_flex}> <span className={styles.filter}>Filter:</span>  <button className={styles.button}>My Trees</button> <button className={styles.button}>All Trees</button></span>

                <div className={styles.map}>
                    <Map />

                </div>

            </div>


      
            <Nav currentPage={"MapView"} setCurrentPage={setCurrentPage} />
        </>

    )
}



export default MapView

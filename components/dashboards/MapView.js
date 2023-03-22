import styles from "@/styles/MapView.module.css"
import Map from "../Map.js"

const MapView = () => {
  return (

    <div className={styles.main}>
        <p className={styles.description}>This is a live map showing all the trees that have been planted through Arbour.</p>
      
        <span className={styles.buttons_flex}> <span className={styles.filter}>Filter:</span>  <button className={styles.button}>My Trees</button> <button className={styles.button}>All Trees</button></span>

        <div className={styles.map}> 
          <Map/>
        
        </div>

      
    </div>
    
  )
}

export default MapView
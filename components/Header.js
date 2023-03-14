import styles from "@/styles/Header.module.css"
import Signup from "./Signup"

const Nav = ( {page = "Arbour"}) => {
    return (
        <>
        <div className={styles.nav}>
          <span> {page}</span>
        </div>
        
        </>
        
        
    )
}

export default Nav
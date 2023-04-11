import styles from "@/styles/Sponsor.module.css"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"


const setCurrentPage = () => {
    return ""
}


const Sponsor = (plants) => {
    console.log(plants)

    return (
        <>
            <Header page="Arbour" />
            <form className={styles.main}>
                <span>
                    <label htmlFor="tree-type" className={styles.label}>Tree Type:</label>
                    <select className={styles.select} name="tree-type" id="tree-type">
                        <option value="general">General</option>
                        <option value="acacia">Acacia</option>
                    </select>
                </span>

                <span>

                    <label htmlFor="tree-type" className={styles.label}>Amount:&nbsp;&nbsp;&nbsp;</label>
                    <input className={styles.select} type="number" name="amount" />
                </span>

                <button className={styles.button}>
                    Sponsor
                </button>


            </form>
            <Nav currentPage={"Sponsor"} setCurrentPage={setCurrentPage} />
        </>

    )
}



export default Sponsor
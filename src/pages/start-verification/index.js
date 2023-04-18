import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import styles from "@/styles/StartVerification.module.css"

const index = () => {
    return (
        <div>

            <Header />
            <div className={styles.main}>
                <p className={styles.description}>These are the submissions of your planters plant-site before and after the plant. Verify the authenticity and respond accordingly.</p>
                <div className={styles.images_flex}>
                    <div className={styles.inner}>
                    <p className={styles.text}><b>Plant site before planting: </b></p>
                    <img className={styles.image} src="https://picsum.photos/500" alt="plant site before" />

                    </div>
                    <div className={styles.inner}>
                    <p className={styles.text}><b>Plant site after:</b> </p>
                    <img className={styles.image} src="https://picsum.photos/500" alt="plant site before" />

                    </div>
                </div>
                <div className={styles.buttons_flex}>
                    <button className={styles.button_approve}>Approve & Pay</button>
                    <button className={styles.button_reject} >Reject</button>
                </div>
            </div>



            <Nav currentPage = "Ongoing"/>
        </div>
    )
}

export default index
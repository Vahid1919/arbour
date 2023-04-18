import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import styles from "@/styles/Plant.module.css"

const index = () => {
    return (
        <div>

            <Header showCredits = {true} hasNotifications = {false} />
            <div className={styles.main}>
                <Card buttonText="Verify"/>
            </div>

            <Nav currentPage="Sponsor" />
        </div>
    )
}

export default index
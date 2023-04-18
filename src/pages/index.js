import Header from "../../components/Header"
import Signup from "../../components/auth/Signup"
import styles from "@/styles/Auth.module.css"



export default function Home() {

  return (
    <div className={styles.background}>
      <Header showCredits = {false} hasNotifications = {false} />
      <Signup/>
    </div>
  )
}


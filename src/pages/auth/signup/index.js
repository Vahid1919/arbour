import Header from "../../../../components/Header"
import Signup from "../../../../components/auth/Signup"
import styles from "@/styles/Auth.module.css"

const index = () => {

  return (
    <div className={styles.background}>
      <Header showCredits={false} hasNotifications={false} />
      <Signup />
    </div>
  )
}

export default index
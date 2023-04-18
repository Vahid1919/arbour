import Header from "../../../../components/Header"
import Login from "../../../../components/auth/Login"
import styles from "@/styles/Auth.module.css"

const index = () => {

  return (
    <div className={styles.background}>

      <Header showCredits={false} hasNotifications={false} />
      <Login />
    </div>
  )
}

export default index
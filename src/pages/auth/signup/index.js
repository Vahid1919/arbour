import Header from "../../../../components/Header"
import Link from 'next/link'
import styles from "@/styles/Auth.module.css"
import { useEffect } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"


const index = () => {
  const { status, data } = useSession()
    useEffect(() => {
        if (status === "authenticated"){
            Router.replace("/plant/")
        }

    }, [status])

  return (
    <div className={styles.background}>
      <Header showCredits={false} hasNotifications={false} />
      <form action="" method="post" className={styles.form}>
            <h1 className={styles.heading}>Register</h1>
            <div className={styles.name_input_container}>
            <input className={styles.name} placeholder="First Name" type="text" name="first-name"/>
            <input className={styles.name} placeholder="Last Name" type="text" name="last-name"/>
            </div>
            <input className={styles.secondary} placeholder="Email" type="email" name="email"/>
            <input className={styles.secondary} placeholder="Password" type="password" name=""/>

            <Link className={styles.link} href="/plant"><input className={styles.submit} type="submit" value="Submit" /></Link>
  
            
            <span className={styles.to_login}>Already have an account? <Link className={styles.link} href="/auth/login">Login</Link></span>
        </form>
    </div>
  )
}

export default index
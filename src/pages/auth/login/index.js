import Header from "../../../../components/Header"
import Link from 'next/link'
import { useSession, signIn } from "next-auth/react"
import Router from "next/router"
import styles from "@/styles/Auth.module.css"
import { useRef, useEffect} from 'react';


const index = () => {
  const { status, data } = useSession()
  useEffect(() => {
      if (status === "authenticated"){
          Router.replace("/plant/")
      } 

  }, [status])



  const email = useRef("")
  const password = useRef("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const result = await signIn("credentials", {
      email: email.current,
      password: password.current,
      redirect: true,
      callbackUrl: "/"
    }
    )

    console.log(result)
  };


  return (
    <div className={styles.background}>

      <Header showCredits={false} hasNotifications={false} />
      <form onSubmit={(e) => handleSubmit(e)} action="" method="post" className={styles.form}>
        <h1 className={styles.heading}>Sign In</h1>
        <input className={styles.secondary} placeholder="Email" type="email" name="email" onChange={(e) => email.current = e.target.value} />
        <input className={styles.secondary} placeholder="Password" type="password" name="" onChange={(e) => password.current = e.target.value} />


        <button type="submit" className={styles.submit}>Login</button>

        <span className={styles.to_login}>New here? <Link className={styles.link} href="/auth/signup">Sign up</Link></span>

      </form>
    </div>
  )
}

export default index
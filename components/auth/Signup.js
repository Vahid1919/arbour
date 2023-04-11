import styles from "@/styles/Signup.module.css"
import Link from "next/link"

const Signup = () => {
  return (
    <>
        
        <form action="" method="post" className={styles.form}>
            <h1 className={styles.heading}>Register</h1>
            <div className={styles.name_input_container}>
            <input className={styles.name} placeholder="First Name" type="text" name="first-name" id="" />
            <input className={styles.name} placeholder="Last Name" type="text" name="last-name" id="" />
            </div>
            <input className={styles.secondary} placeholder="Email" type="email" name="email" id="" />
            <input className={styles.secondary} placeholder="Password" type="password" name="" id="" />

            <Link className={styles.link} href="/plant"><input className={styles.submit} type="submit" value="Submit" /></Link>
  
            
            <span className={styles.to_login}>Already have an account? <Link className={styles.link} href="/auth/login">Login</Link></span>
        </form>
    
    </>
  )
}

export default Signup
import styles from "@/styles/Signup.module.css"
import Link from 'next/link'

const Signup = () => {
  return (
    <>
        
        <form action="" method="post" className={styles.form}>
            <h1 className={styles.heading}>Sign In</h1>
            <input className={styles.secondary} placeholder="Email" type="email" name="email" />
            <input className={styles.secondary} placeholder="Password" type="password" name="" />

            
            <Link className={styles.link} href="/plant"><input className={styles.submit} type="submit" value="Login" /></Link>
            <span className={styles.to_login}>New here? <Link className={styles.link} href="/auth/signup">Sign up</Link></span>

        </form>
    
    </>
  )
}

export default Signup
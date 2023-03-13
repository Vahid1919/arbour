import styles from "@/styles/Signup.module.css"

const Signup = () => {
  return (
    <>
        
        <form action="" method="post" className={styles.form}>
            <h1 className={styles.heading}>Sign In</h1>
            <input className={styles.secondary} placeholder="Email" type="email" name="email" id="" />
            <input className={styles.secondary} placeholder="Password" type="password" name="" id="" />

            <input className={styles.submit} type="submit" value="Login" />
            <span className={styles.to_login}>New here? <a className={styles.link} href="">Sign up</a></span>

        </form>
    
    </>
  )
}

export default Signup
import styles from "@/styles/Signup.module.css"

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

            <input className={styles.submit} type="submit" value="Sign Up" />
            
            <span className={styles.to_login}>Already have an account? <a className={styles.link} href="http://">Login</a></span>
        </form>
    
    </>
  )
}

export default Signup
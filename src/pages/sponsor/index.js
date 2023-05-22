import styles from "@/styles/Sponsor.module.css"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useEffect } from "react";
import Router from "next/router"
import { useSession, signOut } from "next-auth/react"



const Sponsor = () => {
    const { status, data } = useSession()
    useEffect(() => {
        if (status === "unauthenticated"){
            Router.replace("/auth/login")
        } 

    }, [status])

    console.log([status, data])

    return (
        <>
            <Header showCredits = {true} hasNotifications = {false} />
            <form className={styles.main}>
                <span>
                    <label htmlFor="tree-type" className={styles.label}>Tree Type:</label>
                    <select className={styles.select} name="tree-type" id="tree-type">
                        <option value="general">General</option>
                        <option value="acacia">Acacia</option>
                    </select>
                </span>

                <span>

                    <label htmlFor="tree-type" className={styles.label}>Amount:&nbsp;&nbsp;&nbsp;</label>
                    <input className={styles.select} type="number" name="amount" />
                </span>

                <button className={styles.button}>
                    Sponsor
                </button>


            </form>
            <Nav currentPage={"Sponsor"} />
        </>

    )
}



export default Sponsor
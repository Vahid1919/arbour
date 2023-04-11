import styles from "@/styles/Ongoing.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"

import { useState } from "react"


const setCurrentPage = () => {
    return ""
}


const Ongoing = () => {
    const [mode, setMode] = useState("plant")
    const onOptionChange = e => {
        setMode(e.target.value)
        console.log(`mode changed to ${e.target.value}`)
      }

    return (
        <>
            <Header page="Arbour" />
            <div className={styles.main}>
            <div className={styles.buttons_flex}>

                <div className={styles.radio_container}>
                    <input onClick={(e) => onOptionChange(e)} className={styles.radio} type="radio" name="mode" id="plant" value="plant" defaultChecked checked={mode === "plant"}/>
                    <label className={styles.text} htmlFor="plant">Plant</label>
                </div>

                <div className={styles.radio_container}>
                    <input onClick={(e) => onOptionChange(e)} className={styles.radio} type="radio" name="mode" id="sponsor" value="sponsor" checked={mode === "sponsor"}/>
                    <label className={styles.text} htmlFor="sponsor">Sponsor</label>
                </div>
            </div>

        <div className={styles.inherited_main}>
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
            <Card buttonText="Verify" />
        </div>


        </div>
            <Nav currentPage={"Ongoing"} setCurrentPage={setCurrentPage} />
        </>

    )
}



export default Ongoing

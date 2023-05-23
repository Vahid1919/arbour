import styles from "@/styles/Ongoing.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState, useEffect } from "react";
import Router from "next/router"
import { useSession } from "next-auth/react"
import Link from "next/link"



const Ongoing = ({plants, sponsors}) => {
    const { status, data } = useSession()
    useEffect(() => {
        if (status === "unauthenticated"){
            Router.replace("/auth/login")
        } 

    }, [status])

    console.log([status, data])


    const [mode, setMode] = useState("plant")
    
    const onOptionChange = e => {
        setMode(e.target.value)
        console.log(`mode changed to ${e.target.value}`)
    }

    return (
        <>
            <Header showCredits = {true} hasNotifications = {false} />
            <div className={styles.main}>
                <div className={styles.buttons_flex}>

                    <div className={styles.radio_container}>
                        <input onClick={(e) => onOptionChange(e)} className={styles.radio} type="radio" name="mode" id="plant" value="plant" defaultChecked  />
                        <label className={styles.text} htmlFor="plant">Plant</label>
                    </div>

                    <div className={styles.radio_container}>
                        <input onClick={(e) => onOptionChange(e)} className={styles.radio} type="radio" name="mode" id="sponsor" value="sponsor" />
                        <label className={styles.text} htmlFor="sponsor">Sponsor</label>
                    </div>
                </div>

                <div className={styles.inherited_main}>


                    {
                        mode === "plant" ?
                        plants.map((plant) => (
                            <Link href="/start-plant"><Card key={plant.id} treeType={plant.tree_type} sponsor={plant.sponsor_name} bounty={plant.bounty} buttonText="Plant" /></Link>
                        ))
                        :
                        sponsors.map((plant) => (
                            <Link href="/start-verification"><Card key={plant.id} treeType={plant.tree_type} sponsor={plant.sponsor_name} bounty={plant.bounty} buttonText="Verify" /></Link>
                        ))



                    }

                </div>


            </div>
            <Nav currentPage={"Ongoing"} />
        </>

    )
}



export default Ongoing


export const getStaticProps = async () => {
    console.log("started plant get static props")
    const ongoingPlants = await fetch('https://mocki.io/v1/90444af3-4042-4259-a487-94faea4ae361')
    const plants = await ongoingPlants.json()

    const ongoingSponsors = await fetch('https://mocki.io/v1/1b0245dd-702d-45c4-881c-d2a00954e1e4')
    const sponsors = await ongoingSponsors.json()




    return {
        props: {
            plants,
            sponsors
        }
    }
}
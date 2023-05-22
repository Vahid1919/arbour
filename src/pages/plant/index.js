import styles from "@/styles/Plant.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"



const Plant = ({plants}) => {

  const {status, data} = useSession()
  useEffect(() => {
    if(status === "unauthenticated") Router.replace("/auth/login")

  }, [status])
  
  console.log([status, data])

  const [claimConfirmation, setClaimConfirmation] = useState(false)

  const makeClaim = (id) => {
    console.log(id)
    // remove plant from plant list
    //add plant to ongoing list
  }
  
  if (status === "authenticated"){
    return (
      <>
          <Header showCredits = {true} hasNotifications = {false} />
          <div className={styles.main}>          
          {plants.map((plant) => (
            <Card key = {plant.id} id = {plant.id} treeType = {plant.tree_type} sponsor= {plant.sponsor_name} bounty = {plant.bounty} clickHandler = {makeClaim} buttonText = "Claim"/>
          ))}
          </div>
          <Nav currentPage={"Plant"}/>
      </>
      
    )
  }

  return <div>Loading</div>
  
}



export default Plant

export const getStaticProps = async () => {
  console.log("started plant get static props")
  const res = await fetch('https://mocki.io/v1/f7e67dd2-ea66-4d82-b07a-14d2426516a5')
  const plants = await res.json()
  return {
    props: {
      plants
    }
  }
}
import styles from "@/styles/Plant.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import Router from "next/router"
import Link from "next/link"



const Plant = ({plants}) => {
  console.log(plants.results)

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
      <div>
          <Header showCredits = {true} hasNotifications = {false} />
          <div className={styles.main}>          
          {plants.results.map((plant) => (
            <Link href="/start-plant"> <Card key = {plant.id} id = {plant.id} treeType = {plant.plant_name} sponsor= {plant.sponsor_id} bounty = {plant.bounty_amount} clickHandler = {makeClaim} buttonText = "Claim"/></Link>
          ))}
          </div>
          <Nav currentPage={"Plant"}/>
     </div>
  
      
    )
  }

  return <div>Loading</div>
  
}



export default Plant

export const getServerSideProps = async () => {
  console.log("started plant get static props")
  const res = await fetch('http://localhost:3000/api/getPlants')
  const plants = await res.json()
  console.log(plants)
  console.log("from server")

  return {
    props: {
      plants
    }
  }
}
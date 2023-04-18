import styles from "@/styles/Plant.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"



const Plant = ({plants}) => {

  
  return (
    <>
        <Header showCredits = {true} hasNotifications = {false} />
        <div className={styles.main}>          
        {plants.map((plant) => (
          <Card key = {plant.id} treeType = {plant.tree_type} sponsor= {plant.sponsor_name} bounty = {plant.bounty} buttonText = "Claim"/>
        ))}
        </div>
        <Nav currentPage={"Plant"}/>
    </>
    
  )
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
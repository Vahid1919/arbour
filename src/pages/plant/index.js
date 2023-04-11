import styles from "@/styles/Plant.module.css"
import Card from "../../../components/Card"
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"


const setCurrentPage = ( ) => {
    return ""
}


const Plant = (plants) => {

  
  return (
    <>
        <Header page="Arbour"/>
        <div className={styles.main}>          
        {plants.plants.map((plant) => (
          <Card treeType = {plant.tree_type} sponsor= {plant.sponsor_name} bounty = {plant.bounty} buttonText = "Plant"/>
        ))}
        </div>
        <Nav currentPage={"Plant"} setCurrentPage = {setCurrentPage}/>
    </>
    
  )
}



export default Plant

export const getStaticProps = async () => {
  console.log("started get static props")
  const res = await fetch('https://mocki.io/v1/811958f6-49b1-4245-ac17-3ee02b3ce9cc')
  const plants = await res.json()
  return {
    props: {
      plants
    }
  }
}
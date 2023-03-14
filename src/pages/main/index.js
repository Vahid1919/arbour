import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState } from 'react';
import PlantComponent from "../../../components/plant/PlantComponent";


const index = () => {

  let pages = ['Plant', 'Sponsor', "Map", "Profile"]
  const [currentPage, setCurrentPage] = useState("Plant")
  
  const changePage = (newPage) => {
    if(pages.includes(newPage) && currentPage != newPage){
      setCurrentPage(newPage)
    }
  }

  return (
    <div>
        <Header page="Plant"/>
        <PlantComponent/>
        <Nav currentPage={currentPage}/>

    </div>
  )
}

export default index
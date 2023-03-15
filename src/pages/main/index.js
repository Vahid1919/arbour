import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState } from 'react';
import Plant from "../../../components/dashboards/Plant";
import Sponsor from "../../../components/dashboards/Sponsor";
import Map from "../../../components/dashboards/Map";
import Profile from "../../../components/dashboards/Profile";
import Ongoing from "../../../components/dashboards/Ongoing";
import Notification from "../../../components/Notification";


const index = () => {

  let pages = ['Plant', 'Sponsor', "Map", "Ongoing", "Profile"]
  const [currentPage, setCurrentPage] = useState("Ongoing")
  
  const changePage = (newPage) => {
    if(pages.includes(newPage) && currentPage != newPage){
      setCurrentPage(newPage)
    }
  }



  return (
    <div>
        <Header page="Arbour"/>
        <Ongoing/>
        {/* <Plant/> */}
        {/* <Sponsor/>
        <Map/>
        <Profile/> */}
        <Nav currentPage={currentPage}/>
        <Notification/>
    </div>
  )
}

export default index
import Header from "../../../components/Header"
import Nav from "../../../components/Nav"
import { useState } from 'react';
import Plant from "../../../components/dashboards/Plant";
import Sponsor from "../../../components/dashboards/Sponsor";
import MapView from "../../../components/dashboards/MapView";
import Profile from "../../../components/dashboards/Profile";
import Ongoing from "../../../components/dashboards/Ongoing";
import Notification from "../../../components/Notification";
import { useRouter } from 'next/router';


const index = (props) => {
  // console.log(props.router.query.page)


  let pages = ['Plant', 'Sponsor', "MapView", "Ongoing", "Profile"]
  const [currentPage, setCurrentPage] = useState("Plant")
  
  const changePage = (newPage) => {
    if(pages.includes(newPage) && currentPage != newPage){
      setCurrentPage(newPage)
    }
  }



  return (
    <div>
        <Header page="Arbour"/>
        
        {(currentPage ==="Plant") ? <Plant/> : <></>}
        {(currentPage ==="Sponsor") ? <Sponsor/> : <></>}
        {(currentPage ==="Ongoing") ? <Ongoing/> : <></>}
        {(currentPage ==="MapView") ? <MapView/> : <></>}
        {(currentPage ==="Profile") ? <Profile/> : <></>}
          
        <Nav currentPage={currentPage} setCurrentPage = {setCurrentPage}/>
        {/* <Notification/> */}
    </div>
  )
}

export default index
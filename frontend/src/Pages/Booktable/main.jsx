import React, { useState, useEffect } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Reservation from '../Home/Resvation'
import Footer from '../Globe/Footer'
import Scrolltop from '../Globe/scrolltop'

const Main = () => {
  const [isHiddenbarVisible, setIsHiddenbarVisible] = useState(false);

  const openHiddenbar = () => 
    setIsHiddenbarVisible(true);
  ;

  const closeHiddenbar = () => 
    setIsHiddenbarVisible(false);
  ;
  return (
    <>
      <div className="page-wrapper">
        {/* <Preloader/> */}
        <Header toggleHiddenbar={openHiddenbar}       />
        <div className="menu-backdrop"></div>
        <Hiddennavbar />
        <div className="info-back-drop"></div>
        {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
        <Reservation />
        <Footer />
        <Scrolltop />

      </div>
    </>
  )
}

export default Main


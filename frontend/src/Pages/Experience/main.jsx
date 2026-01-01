import React, { useState, useEffect } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Innerbanner from '../Globe/Innerbanner'
import bannerImage from '../../assets/images/background/banner-image-2.JPG';
import Experience from '../Home/Experience'
import Reservation from '../Home/Resvation'
import Footer from '../Globe/Footer'
import Scrolltop from '../Globe/scrolltop'

const Main = () => {
  const [isHiddenbarVisible, setIsHiddenbarVisible] = useState(false);
  const [isHiddenNavbarVisible, setIsHiddenNavbarVisible] = useState(false);
    const openHiddenbar = () => 
    setIsHiddenbarVisible(true);
  ;

  const closeHiddenbar = () => 
    setIsHiddenbarVisible(false);
  ;

  const isMobile = () => window.innerWidth <= 768;




  return (
    <>
      {/* <Preloader/> */}
      <div className="page-wrapper">
        <Header toggleHiddenbar={openHiddenbar} />
        <div className="menu-backdrop"></div>
        <Hiddennavbar onClose={() => setIsHiddenNavbarVisible(false)} isMobile={isMobile()} />
        <div className="info-back-drop"></div>
        {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
        <Innerbanner title="Experience" bannerImage={bannerImage} />  
        <Experience />  
        <Reservation />
        <Footer />
        <Scrolltop />
      </div>
    </>
  )
}

export default Main


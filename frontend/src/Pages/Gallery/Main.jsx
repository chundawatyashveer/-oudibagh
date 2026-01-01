import React, { useState } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Innerbanner from '../Globe/Innerbanner'
import Contactinfo from './Contactinfo'
import Footer from '../Globe/Footer'
import bannerImage4 from '../../assets/images/background/banner-image-4.jpg'
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
    <Header toggleHiddenbar={openHiddenbar} />
    <div className="menu-backdrop"></div>
    <Hiddennavbar/>
    <div className="info-back-drop"></div>
    {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
    <Innerbanner title="Gallery - Masonry" bannerImage={bannerImage4} />
    <Contactinfo/>
    <Footer/>
    <Scrolltop />

    </div>
    </>
  )
}

export default Main


import React, { useState } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
// import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Video from './Video'
import Experience from './Experience'
import Story from '../Globe/Story'
import Intro from '../Globe/Intro'
import Servicesec from '../Globe/Servicesec'
import Specialoffer from './Specialoffer'
import Testimonials from '../Globe/Testimonials'
import Resvation from './Resvation'
import Gallery from '../Globe/Gallery'
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
        {/* <Preloader /> */}
        <Header toggleHiddenbar={openHiddenbar}   />
        <div className="menu-backdrop"></div>
        {/* <Hiddennavbar /> */}
        <div className="info-back-drop"></div>
        {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
        <Video />
        <Story />
        <Intro />
        <Servicesec />
        <Experience />
        <Specialoffer />
        <Testimonials />
        <Gallery />
        <Resvation />
        <Footer />
        <Scrolltop />
      </div>
    </>


  )
}

export default Main

import { useState } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Innerbanner from '../Globe/Innerbanner'
import ContactInfo from './ContactInfo'
import Footer from '../Globe/Footer'
import Map from './Map'
import bannerImage4 from "../../assets/images/background/banner-image-4.JPG"; 
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
      <div className="page-wrapper">
        {/* <Preloader/> */}
        <Header toggleHiddenbar={openHiddenbar}     />
        <div className="menu-backdrop"></div>
        {isHiddenNavbarVisible && <Hiddennavbar onClose={() => setIsHiddenNavbarVisible(false)} isMobile={isMobile()} />}
        <div className="info-back-drop"></div>
        {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
        <Innerbanner title="Contact Us" bannerImage={bannerImage4} />
        <ContactInfo />
        <Map />
        <Footer />
        <Scrolltop /> 


      </div>
    </>
  )
}

export default Main


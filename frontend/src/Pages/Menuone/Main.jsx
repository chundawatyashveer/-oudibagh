import { useState } from 'react'
// import Preloader from '../Globe/Preloader'
import Header from '../Globe/Header'
import Hiddennavbar from '../Globe/Hiddennavbar'
import Hiddenbar from '../Globe/Hiddenbar'
import Innerbanner from '../Globe/Innerbanner'
import Menusec from './Menusec'
import Reservation from '../Home/Resvation'
import Footer from '../Globe/Footer'
import bannerImage1 from '../../assets/images/background/banner-image-1.JPG';   
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
      <Header toggleHiddenbar={openHiddenbar}       />
    <div className="menu-backdrop"></div>
    {isHiddenNavbarVisible && <Hiddennavbar onClose={() => setIsHiddenNavbarVisible(false)} isMobile={isMobile()} />}
    <div className="info-back-drop"></div>
    {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
    <Innerbanner title="Menu " bannerImage={bannerImage1} />
    <Menusec/>
    <Reservation/>
    <Footer/>
    <Scrolltop />

    </div>
    </>
  )
}

export default Main


import React, { useState } from 'react';
import Header from '../Globe/Header';
import Hiddennavbar from '../Globe/Hiddennavbar';
import Hiddenbar from '../Globe/Hiddenbar';
import Reservation from './Reservation';
import Footer from '../Globe/Footer';
import Scrolltop from '../Globe/scrolltop';

const Main = () => {
  const [isHiddenbarVisible, setIsHiddenbarVisible] = useState(false);

  const openHiddenbar = () => setIsHiddenbarVisible(true);
  const closeHiddenbar = () => setIsHiddenbarVisible(false);

  return (
    <>
      <div className="page-wrapper">
        <Header toggleHiddenbar={openHiddenbar} />
        <div className="menu-backdrop" />
        <Hiddennavbar />
        <div className="info-back-drop" />
        {isHiddenbarVisible && <Hiddenbar onClose={closeHiddenbar} />}
        <Reservation />
        <Footer />
        <Scrolltop />
      </div>
    </>
  );
};

export default Main;


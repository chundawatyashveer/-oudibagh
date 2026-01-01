import React, { useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import sidebarImage from '../../assets/images/resource/night.jpg';
import sidebarLogo from '../../assets/images/resource/sidebar-logo.png';

const Hiddenbar = ({ onClose }) => {
  const handleClose = useCallback(() => {
    document.body.classList.remove('side-content-visible');
    onClose();
  }, [onClose]);

  useEffect(() => {
    // Add the class to body when component mounts
    document.body.classList.add('side-content-visible');
    
    // Add ESC key handler
    const handleEscKey = (e) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    
    document.addEventListener('keydown', handleEscKey);
    
    // Remove the class when component unmounts
    return () => {
      document.body.classList.remove('side-content-visible');
      document.removeEventListener('keydown', handleEscKey);
    };
  }, [handleClose]);

  return (
    <div className="hiddenbar-overlay" onClick={handleClose}>
      <section className="info-bar" onClick={(e) => e.stopPropagation()}>
        <div className="inner-box">
          <div className="cross-icon" onClick={handleClose} style={{ cursor: 'pointer' }}>
            <span className="far fa-close" />
          </div>
          <div className="image-box">
            <img src={sidebarImage} alt="sidebar" />
          </div>
          <div className="logo-box">
            <Link to="/"><img src={sidebarLogo} alt="logo" /></Link>
          </div>
          <h5>Visit Us</h5>
          <ul className="info">
            <li>Oudi Bagh, Pushkar, Rajasthan, India </li>
            <li><span className="ib-ttl">Lunch Time</span> - 10.00 am – 3:30 pm</li>
            <li><span className="ib-ttl">Dinner Time</span> - 08.00 pm – 10:30 pm</li>
            <li><a href="mailto:booking@gmail.com">Email: Prathuveer788@gmail.com</a></li>
          </ul>
          <div className="booking-info">
            <div className="bk-no"><a href="tel:+91-9352540381">Booking Request: +91-9352540381</a></div>
          </div>
        </div>
      </section>
      
    </div>
  );
};

export default Hiddenbar;

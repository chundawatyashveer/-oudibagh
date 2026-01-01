import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import sidebarLogo from '../../assets/images/resource/sidebar-logo.png';

const Hiddennavbar = ({ onClose, isMobile }) => {
  const [openDropdown, setOpenDropdown] = useState(null);

  if (!isMobile) return null;

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };
  return (
    <div className="hiddenbar-overlay" onClick={onClose} style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.5)', zIndex: 9998 }}>
      <section
        className={`hidden-bar from-left`}
        onClick={e => e.stopPropagation()}
        aria-modal="true"
        role="dialog"
        style={{ zIndex: 9999 }}
      >
        <div className="inner-box">
          <div className="cross-icon hidden-bar-closer" onClick={onClose} style={{ cursor: 'pointer' }}>
            <span className="far fa-close" />
          </div>
          <div className="logo-box">
            <Link to="/" title="Oudhi-Bagh Home">
              <img
                src={sidebarLogo}
                alt={sidebarLogo}
                title="Oudhi-Bagh Home"
              />
            </Link>
          </div>
          {/* .Side-menu */}
          <div className="side-menu">
            <ul className="navigation clearfix">
              <li>
                <Link to="/" onClick={onClose}>Home</Link>
              </li>
              <li>
                <Link to="/menuone" onClick={onClose}>Menu</Link>
              </li>
              <li><Link to="/Experience" onClick={onClose}>Experience</Link></li>
              <li className={`dropdown ${openDropdown === 'pages' ? 'open' : ''}`.trim()}>
                <a
                  href="#"
                  onClick={e => toggleDropdown(e, 'pages')}
                  aria-haspopup="true"
                  aria-expanded={openDropdown === 'pages'}
                >
                  Pages <span className="fa fa-angle-down" />
                </a>
                <ul>
                  <li>
                    <Link to="/gallery" onClick={onClose}>Photo Gallery</Link>
                  </li>
                  <li>
                    <Link to="/booktable" onClick={onClose}>Reservation 1</Link>
                  </li>
                </ul>
              </li>
              <li><Link to="/contactus" onClick={onClose}>Contact</Link></li>
            </ul>
          </div>
          {/* /.Side-menu */}
        </div>
      </section>
    </div>
  );
};

export default Hiddennavbar;

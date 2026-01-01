import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import sidebarLogo from "../../assets/images/resource/sidebar-logo.png";
import Hiddennavbar from "./Hiddennavbar";
import Hiddenbar from "./Hiddenbar";

const Header = ({ toggleHiddenbar }) => {
  const location = useLocation();
  const [scrollDirection, setScrollDirection] = useState("down");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isFixed, setIsFixed] = useState(false);
  const [showHiddenNavbar, setShowHiddenNavbar] = useState(false);
  const [showInfoBar, setShowInfoBar] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);

  const getActiveClass = (path) => {
    return location.pathname === path ? "current" : "";
  };

  const getActiveClassForDropdown = (paths) => {
    return paths.includes(location.pathname) ? "current" : "";
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setScrollDirection("up");
      } else if (currentScrollY < lastScrollY || currentScrollY <= 100) {
        setScrollDirection("down");
      }

      setIsFixed(currentScrollY > 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  useEffect(() => {
    const handleResize = () => {
      if (!isMobile() && showHiddenNavbar) {
        setShowHiddenNavbar(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [showHiddenNavbar]);

  const isMobile = () => window.innerWidth <= 1400;

  const toggleDropdown = (e, dropdownName) => {
    e.preventDefault();
    e.stopPropagation();
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const handleInfoButtonClick = () => {
    if (isMobile()) {
      setShowHiddenNavbar(true);
      setShowInfoBar(false);
    } else {
      setShowInfoBar(true);
      setShowHiddenNavbar(false);
    }
  };

  useEffect(() => {
    if (showInfoBar && showHiddenNavbar) {
      setShowHiddenNavbar(false);
    }
  }, [showInfoBar, showHiddenNavbar]);

  useEffect(() => {
    if (showHiddenNavbar && showInfoBar) {
      setShowInfoBar(false);
    }
  }, [showHiddenNavbar, showInfoBar]);

  // Sync sidebar state with body class for CSS compatibility
  useEffect(() => {
    if (showSidebar) {
      document.body.classList.add('visible-sidebar');
    } else {
      document.body.classList.remove('visible-sidebar');
    }
    return () => {
      document.body.classList.remove('visible-sidebar');
    };
  }, [showSidebar]);

  return (
    <>
      {isMobile() && showHiddenNavbar && (
        <Hiddennavbar onClose={() => setShowHiddenNavbar(false)} />
      )}
      {!isMobile() && showInfoBar && (
        <Hiddenbar onClose={() => setShowInfoBar(false)} />
      )}

      {isMobile() && showSidebar && (
        <section className="hidden-bar visible-sidebar">
          {/* Hidden Bar Wrapper */}
          <div className="inner-box">
            <div className="cross-icon hidden-bar-closer">
              <button
                type="button"
                onClick={() => setShowSidebar(false)}
                className="far fa-close"
                aria-label="Close sidebar"
              />
            </div>
            <div className="logo-box">
                <Link to="/" title="Oudhi-Bagh Home">
                <img
                  src={sidebarLogo}
                  alt="image"
                  title="Oudhi-Bagh Home"
                  style={{
                    height: '80px',
                    width: 'auto',
                    maxWidth: '200px',
                    objectFit: 'contain'
                  }}
                />
              </Link>
            </div>

            <div className="side-menu">
              <ul className="navigation clearfix">
                <li className="dropdown">
                  <Link to="/" onClick={() => setShowSidebar(false)}>
                    Home
                    
                  </Link>
                 
                </li>
                <li>
                  <Link to="/menuone" onClick={() => setShowSidebar(false)}>Menus</Link>
                </li>
                <li>
                  <Link to="/Experience" onClick={() => setShowSidebar(false)}>Experience</Link>
                </li>
                
                <li className={`dropdown ${openDropdown === 'pages' ? 'open' : ''}`.trim()}>
                  <Link 
                    to="#" 
                    onClick={(e) => toggleDropdown(e, 'pages')}
                    aria-haspopup="true"
                    aria-expanded={openDropdown === 'pages'}
                  >
                    Pages
                    <button
                      type="button"
                      className="btn-expander"
                      aria-label="Expand Pages submenu"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        toggleDropdown(e, 'pages');
                      }}
                    >
                      <i className="far fa-angle-right" />
                    </button>
                  </Link>
                  <ul>
                    <li>
                      <Link to="/gallery" onClick={() => setShowSidebar(false)}>Photo Gallery</Link>
                    </li>
                    <li>
                      <Link to="/booktable" onClick={() => setShowSidebar(false)}>Reservation 1</Link>
                    </li>
                  
                    {/* <li>
                      <Link to="#" onClick={() => setShowSidebar(false)}>Dropdown Menu 1</Link>
                    </li>
                    <li>
                      <Link to="#" onClick={() => setShowSidebar(false)}>Dropdown Lorem 2</Link>
                    </li> */}
                    {/* <li className={`dropdown ${openDropdown === 'dropdown3' ? 'open' : ''}`.trim()}>
                      <Link 
                        to="#"
                        onClick={(e) => toggleDropdown(e, 'dropdown3')}
                        aria-haspopup="true"
                        aria-expanded={openDropdown === 'dropdown3'}
                      >
                        Dropdown Menu 3
                        <button
                          type="button"
                          className="btn-expander"
                          aria-label="Expand Dropdown Menu 3 submenu"
                          onClick={(e) => {
                            e.preventDefault();
                            e.stopPropagation();
                            toggleDropdown(e, 'dropdown3');
                          }}
                        >
                          <i className="far fa-angle-right" />
                        </button>
                      </Link>
                      
                    </li> */}
                  </ul>
                </li>
                <li>
                  <Link to="/contactus" onClick={() => setShowSidebar(false)}>Contact</Link>
                </li>
              </ul>
            </div>
            {/* /.Side-menu */}
          </div>
          {/* / Hidden Bar Wrapper */}
        </section>
      )}
      <header
        className={`main-header${
          isFixed ? " fixed-header" : ""
        } header-${scrollDirection}`}
      >
        <div className="header-top">
          <div className="auto-container">
            <div className="inner clearfix">
              <div className="top-left clearfix">
                <ul className="top-info clearfix">
                  <li>
                    <i className="icon far fa-map-marker-alt" /> Oudi Bagh,
                    Pushkar, Rajasthan, India
                  </li>
                  <li>
                    <i className="icon far fa-clock" /> Daily : 10.00 am to 10.00
                    pm to 10.00 pm
                  </li>
                </ul>
              </div>
              <div className="top-right clearfix">
                <ul className="top-info clearfix">
                  <li>
                      <Link to="tel:+91-9352540881">
                      <i className="icon far fa-phone" /> +91-9352540881
                    </Link>
                  </li>
                  <li>
                    <Link to="mailto:Prathuveer788@gmail.com">
                      <i className="icon far fa-envelope" />{" "}
                      Prathuveer788@gmail.com
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="header-upper">
          <div className="auto-container">
            <div className="main-box clearfix">
              <div className="logo-box">
                <div className="logo">
                  <Link to="/" title="Oudhi-Bagh Home">
                    <img
                      src={logo}
                      alt="logo"
                      title="Oudhi-Bagh Home"
                      style={{
                        height: '80px',
                        width: 'auto',
                        maxWidth: '200px',
                        objectFit: 'contain'
                      }}
                    />
                  </Link>
                </div>
              </div>
              <div className="nav-box clearfix">
                <div className="nav-outer clearfix">
                  <nav className="main-menu">
                    <ul className="navigation clearfix">
                      {/* <li className={`dropdown ${getActiveClass("/")}`    }>
                        <Link to="/">Home</Link>
                        <ul>
                          <li>
                            <Link to="/">Home One</Link>
                          </li>
                          <li>
                            <Link to="/">Home Two</Link>
                          </li>
                          <li>
                            <Link to="/">Home Three</Link>
                          </li>
                          <li>
                            <Link to="/">Home Four</Link>
                          </li>
                        </ul>
                      </li> */}
                      <li className={getActiveClass("/")}>
                        {" "}
                        <Link to="/">Home</Link>{" "}
                      </li>
                      <li className={getActiveClass("/menuone")}>
                        {" "}
                        <Link to="/menuone">Menus</Link>{" "}
                      </li>
                      <li className={getActiveClass("/Experience")}>
                        {" "}
                        <Link to="/Experience">Experience</Link>{" "}
                      </li>
                     
                      <li
                        className={`dropdown ${getActiveClassForDropdown([
                          "/gallery",
                          "/booktable",
                          
                        ])}`}
                      >
                        <Link to="#">Pages</Link>
                        <ul>
                          <li>
                            <Link to="/gallery">Photo Gallery</Link>
                          </li>
                          <li>
                            <Link to="/booktable">Reservation 1</Link>
                          </li>
                          
                        </ul>
                      </li>
                      <li className={getActiveClass("/contact")}>
                        {" "}
                        <Link to="/contactus">Contact</Link>{" "}
                      </li>
                    </ul>
                  </nav>
                </div>
                <div className="links-box clearfix">
                  {!isMobile() && (
                    <div className="link link-btn">
                      <Link
                        to="/booktable"
                        className="theme-btn btn-style-one clearfix"
                      >
                        <span className="btn-wrap">
                          <span className="text-one">book a table</span>
                          <span className="text-two">book a table</span>
                        </span>
                      </Link>
                    </div>
                  )}
                  <div className="link info-toggler">
                    <button
                      className="info-btn"
                      onClick={handleInfoButtonClick}
                      title={
                        isMobile()
                          ? "Open navigation menu"
                          : "Open information bar"
                      }
                      aria-label={
                        isMobile()
                          ? "Open navigation menu"
                          : "Open information bar"
                      }
                    >
                      <span className="hamburger">
                        <span className="top-bun" />
                        <span className="meat" />
                        <span className="bottom-bun" />
                      </span>
                    </button>
                  </div>
                </div>
                {isMobile() && (
                  <div className="nav-toggler">
                    <button
                      className="hidden-bar-opener"
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSidebar(true);
                      }}
                      onTouchEnd={(e) => {
                        e.preventDefault();
                        e.stopPropagation();
                        setShowSidebar(true);
                      }}
                      title="Open navigation menu"
                      aria-label="Open navigation menu"
                      style={{
                        cursor: 'pointer',
                        WebkitTapHighlightColor: 'rgba(0, 0, 0, 0.1)',
                        touchAction: 'manipulation',
                        position: 'relative',
                        zIndex: 1001
                      }}
                    >
                      <span className="hamburger">
                        <span className="top-bun" />
                        <span className="meat" />
                        <span className="bottom-bun" />
                      </span>
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;

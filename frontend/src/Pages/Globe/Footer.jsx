import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import footerImg1 from '../../assets/images/resource/footer-img-1.jpg';
import footerImg2 from '../../assets/images/resource/footer-img-2.jpg';

const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="upper-section section-kt">
        <div className="auto-container">
          <div className="row clearfix">
            {/* Footer Col */}
            <div className="footer-col info-col col-lg-6 col-md-12 col-sm-12">
              <div
                className="inner wow fadeInUp"
                data-wow-delay="0ms"
                data-wow-duration="1500ms"
              >
                <div className="content">
                  <div className="logo">
                    <Link to="/" title="Restoria - Restaurants HTML Template">
                      <img
                        src={logo}
                        alt={logo}
                        title="Restoria - Restaurants HTML Template"
                      />
                    </Link>
                  </div>
                  <div className="info">
                    <h6>Visit Us</h6>
                    <ul>
                      <li>Oudi Bagh, pushkar, Rajasthan, India</li>
                      <li>Daily - 8.00 am to 10.00 pm</li>
                      <li>
                        <a href="mailto:booking@domainname.com">
                          booking@gmail.com
                        </a>
                      </li>
                      <li>
                        <a href="tel:+91-9352540381">
                          Booking Request : +91-9352540381
                        </a>
                      </li>
                    </ul>
                  </div>
                  {/* <div className="separator">
                    <span> </span>
                  </div> */}
                  
                </div>
              </div>
            </div>

            {/* Footer Images */}
            <div className="footer-col footer-image-col col-lg-3 col-md-6 col-sm-12">
              <div className="footer-image">
                <img src={footerImg1} alt={footerImg1} />
              </div>
            </div>

            <div className="footer-col footer-image-col last col-lg-3 col-md-6 col-sm-12">
              <div className="footer-image">
                <img src={footerImg2} alt={footerImg2} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="bottom_footer">
        <div className="auto-container">
          <div className="row clearfix">
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p>© 2025 All Rights Reserved</p>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <ul className="social_media">
                <li>
                  <a
                    href="https://www.facebook.com"
                    aria-label="facebook page"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-facebook-f" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/oudibagh/?hl=en"
                    aria-label="instagram page"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-instagram" />
                  </a>
                </li>
                
                <li>
                  <a
                    href="https://www.youtube.com/@OudiBagh"
                    aria-label="youtube page"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <i className="fa-brands fa-youtube" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-4 col-md-4 col-sm-12">
              <p className="developer_text">
                Crafted by{" "}
                <a
                  href="https://www.instagram.com/yashveersinghchundawat/?hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  yashveer singh chundawat
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

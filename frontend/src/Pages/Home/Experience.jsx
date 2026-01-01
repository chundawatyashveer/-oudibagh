import React from 'react';
import { Link } from 'react-router-dom';
import experienceTitleBadge from '../../assets/images/resource/experience-title-badge.png';
import safariImage from '../../assets/images/resource/safari.JPG';
import candlelightImage from '../../assets/images/resource/candile-light.JPG';


const Experience = () => {
  return (
    <section className="we-offer-section section-kt">
    {/* background text */}
    <div className="bg-text">Experience </div>
    <div className="auto-container">
      <div className="title-box centered">
        <div className="title-badge">
          {" "}
          <img
              src={experienceTitleBadge}
            alt="Experience Badge"
            title="Experience Badge"
          />{" "}
        </div>
        <h2>Unforgettable Experiences Await You</h2>
      </div>
      <div className="row justify-content-center clearfix">
        {/*Block*/}
        <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
            <div className="image">
              <Link to="/booktable"><img src={safariImage} alt="Safari Experience" /></Link>
            </div>
            <h4>
              <Link to="/booktable">Safari</Link>
            </h4>
            <div className="des">
              Embark on an exciting adventure through nature's wilderness and discover the beauty of the great outdoors{" "}
            </div>
            <div className="link-box" style={{ marginTop: '20px' }}>
              <Link
                to="/booktable"
                className="theme-btn btn-style-two clearfix"
              >
                <span className="btn-wrap">
                  <span className="text-one">book your Experience</span>
                  <span className="text-two">book your Experience</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        {/*Block*/}
        <div className="offer-block col-xl-4 col-lg-4 col-md-6 col-sm-12">
          <div
            className="inner-box wow fadeInUp"
            data-wow-duration="1500ms"
            data-wow-delay="300ms"
          >
            <div className="image">
              <Link to="/booktable">
                <img src={candlelightImage} alt="Candlelight Dinner" />
              </Link>
            </div>
            <h4>
              <Link to="/booktable">Candlelight Dinner</Link>
            </h4>
            <div className="des">
              Indulge in a romantic and intimate dining experience under the warm glow of candlelight {" "}
            </div>
            <div className="link-box" style={{ marginTop: '20px' }}>
              <Link
                to="/booktable"
                className="theme-btn btn-style-two clearfix"
              >
                <span className="btn-wrap">
                  <span className="text-one">book your Experience</span>
                  <span className="text-two">book your Experience</span>
                </span>
              </Link>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  </section>
  

  );
};

export default Experience;

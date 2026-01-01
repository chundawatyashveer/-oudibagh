import React from 'react';
import { Link } from 'react-router-dom';
import videoSrc from '../../assets/video/IMG_0247.MP4';


const Video = () => {
  return (
    <div className="bg-video-wrap">
      {/* social links */}
      <div className="banner-social-list">
        <span className="line" />
        <ul className="custom-ul">
          <li><Link to="#">FB</Link></li>
          <li><Link to="https://www.instagram.com/oudibagh/?hl=en">IN</Link></li>
          <li><Link to="https://www.youtube.com/@OudiBagh">YT</Link></li>
        </ul>
        <span className="line" />
      </div>

      {/* call link */}
      <div className="banner-call">
        <span className="line" />
        <ul className="call-ul">
          <li>
            <a href="tel:+91-9352540381">Booking : +91-9352540381</a>
          </li>
        </ul>
        <span className="line" />
      </div>

      {/* background video*/}
      <video src={videoSrc} loop muted autoPlay playsInline></video>
       
      {/* overlay bg */}
      <div className="overlay"></div>

      {/* content */}
      <div className="auto-container">
        <div className="content-box">
          <div className="content">
            <div className="inner">
              <h1>
                Where <br /> Experience Meets <br />
                <span>elegance</span>
              </h1>
            </div>
          </div>
        </div>
      </div>

      {/* CTA button
      <Link to="/book-table" className="book-btn">
        <span className="icon">
          <img
            src={bookIcon1}
            alt={bookIcon1}
            title="Book Now"
          />
        </span>
      </Link> */}
    </div>
  );
};

export default Video;

import React from 'react';
import bannerImage1 from '../../assets/images/background/banner-image-1.JPG';

const Innerbanner = ({ title, bannerImage }) => {
  return (
    <div>
      <section className="inner-banner">
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${bannerImage || bannerImage1})` }}
        />
        <div className="auto-container">
          <div className="inner">
            <h1>{title}</h1>
            <div className="sub_text">
              <p>
                A taste of adventure{" "}
                <br className="mobile-break" />
                -{" "}
                <span className="primary-color">
                  with a heritage twist.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Innerbanner;

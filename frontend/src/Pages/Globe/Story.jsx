import React from 'react'

import hygienic from '../../assets/images/resource/hygienic.png';
import ambiance from '../../assets/images/resource/ambiance.png';
import image1 from '../../assets/images/resource/image-1.jpg';

const Story = () => {
  return (
    <section className="story-section home-page section-kt">
  {/* side image */}
  {/* <div className="side-image storyside-img">
    <img src={sideimgFood} alt={sideimgFood} title="image" />
  </div> */}
  <div className="auto-container">
    <div className="title-box centered">
      <div className="subtitle">
        <span>our story</span>
      </div>
      <h2>
        Treating traveller to experience beyond the ordinary{" "}
        <span className="theme_color">
          {" "}
          {/* <img
            src={tagImg1}
            alt={tagImg1}
            title="image"
          />{" "} */}
          & create soul enriching memories
        </span>
        
      </h2>
    </div>
    <div className="row clearfix">
      {/*Col*/}
      <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div
          className="inner wow fadeInLeft"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="text">
            {" "}
            Imagine gatherings with your loved ones in a lovable venue decorated with beauty and enchantment, in which every detail has been meticulously curated to make sure an unforgettable experience. From birthdays to anniversary celebrations and family reunions,
          </div>
          <div className="feature-info">
            <div className="feature-info-box">
              <div className="feature-icon">
                <img src={hygienic} alt={hygienic} />
              </div>
              <h6 className="feature-title">
                HYGIENIC FOOD
              </h6>
              <div className="infotext">
                Lorem Ipsum is simply dummy text of the printing and type
                setting dummy text.
              </div>
            </div>
            <div className="feature-info-box">
              <div className="feature-icon">
                <img src={ambiance} alt={ambiance} />
              </div>
              <h6 className="feature-title">
                FRESH AMBIENCE
              </h6>
              <div className="infotext">
                Lorem Ipsum is simply dummy text of the printing and type
                setting dummy text.
              </div>
            </div>
          </div>
          <div className="booking-info">
            <div className="bk-title">
              Booking Request :
            </div>
            <div className="bk-no">
              <a href="tel:+91-9352540881">
                +91-9352540881
              </a>
            </div>
            <div className="link-box">
              <a
                href="/booktable"
                className="theme-btn btn-style-two clearfix"
              >
                <span className="btn-wrap">
                  <span className="text-one">BOOK A TABLE</span>
                  <span className="text-two">BOOK A TABLE</span>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*Col*/}
      <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
        <div
          className="inner wow fadeInRight"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="images parallax-scene-1">
            <div className="image" data-depth="0.15">
              <img src={image1} alt={image1} />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Story

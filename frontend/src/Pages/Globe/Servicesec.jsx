import React from 'react'
import sIcon1 from '../../assets/images/resource/s-icon-1.png';
import sIcon2 from '../../assets/images/resource/s-icon-2.png';
import sIcon3 from '../../assets/images/resource/s-icon-3.png';
import sIcon4 from '../../assets/images/resource/s-icon-4.png';
 import serviceImage from '../../assets/images/resource/service-image1.jpg';
const Servicesec = () => {
  return (
    <section className="services-section section-kt">
  {/* background text */}
  <div className="bg-text">Services </div>
  <div className="auto-container">
    <div className="title-box centered">
      <div className="subtitle">
        <span>our services</span>
      </div>
      <h2>
      Perfect Spaces for <br /> Every Occasion
      </h2>
    </div>
    <div className="row clearfix">
      <div className="s-col col-lg-4 col-md-6 col-sm-12">
        <div
          className="inner wow fadeInLeft"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="s-block alternate">
            <div className="inner">
              <div className="icon-box">
                <img src={sIcon1} alt={sIcon1} title="" />
              </div>
              <h6>
              Party & <br /> Celebrations
              </h6>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys.
              </div>
            </div>
          </div>
          <div className="s-block alternate">
            <div className="inner">
              <div className="icon-box">
                <img src={sIcon2} alt={sIcon2} title="" />
              </div>
              <h6>
              Luxury Fine <br /> Dining
              </h6>
              <div className="text">
                Simply dummy text of the printing and typesetting industry lorem
                Ipsum has been the industrys lorem Ipsum is.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="s-col last col-lg-4 col-md-6 col-sm-12">
        <div
          className="inner wow fadeInRight"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="s-block ">
            <div className="inner">
              <div className="icon-box">
                <img src={sIcon3} alt={sIcon3} title="" />
              </div>
              <h6>
              Banquet <br /> Hall
              </h6>
              <div className="text">
                Printing and typeset industry lorem Ipsum has been lorem Ipsum
                is simply dummy typeset industry lorem Ipsum has been.
              </div>
            </div>
          </div>
          <div className="s-block ">
            <div className="inner">
              <div className="icon-box">
                <img src={sIcon4} alt={sIcon4} title="" />
              </div>
              <h6>
              Corporate <br /> Events
              </h6>
              <div className="text">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry lorem Ipsum has been the industrys.
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="image-col col-lg-4 col-md-12 col-sm-12">
        <div
          className="inner wow fadeInUp"
          data-wow-duration="1500ms"
          data-wow-delay="0ms"
        >
          <div className="image-box">
            <img src={serviceImage} alt={serviceImage} title="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

  )
}

export default Servicesec
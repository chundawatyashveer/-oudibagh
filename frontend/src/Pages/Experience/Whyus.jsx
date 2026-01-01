import React from 'react';
import CountUp from 'react-countup';

import why1 from '../../assets/images/resource/why1.jpg';
import why2 from '../../assets/images/resource/why2.jpg';
import why3 from '../../assets/images/resource/why3.jpg';
import why4 from '../../assets/images/resource/why4.jpg';

const Whyus = () => {
  return (
    <div>
      <section className="why-us-two section-kt">
        <div className="auto-container">
          <div className="title-box centered">
            <div className="subtitle">
              <span>why choose us</span>
            </div>
            <h2>Why Dine With Us</h2>
          </div>
          <div className="row clearfix">
            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="0ms">
                <div className="image-box">
                  <img src={why1} alt="why1" />
                </div>
                <div className="over-box">
                  <h6>skilled chef</h6>
                </div>
              </div>
            </div>

            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="300ms">
                <div className="image-box">
                  <img src={why2} alt="why2" />
                </div>
                <div className="over-box">
                  <h6>hygienic food</h6>
                </div>
              </div>
            </div>

            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="600ms">
                <div className="image-box">
                  <img src={why3} alt="why3" />
                </div>
                <div className="over-box">
                  <h6>Fresh ambience</h6>
                </div>
              </div>
            </div>

            <div className="why-block-two col-xl-3 col-lg-3 col-md-6 col-sm-6 col-xs-12">
              <div className="inner-box wow fadeInUp" data-wow-duration="1500ms" data-wow-delay="900ms">
                <div className="image-box">
                  <img src={why4} alt="why4" />
                </div>
                <div className="over-box">
                  <h6>secreat recipe</h6>
                </div>
              </div>
            </div>
          </div>

          {/* Count Up Section */}
          <div className="fact-counter">
            <div className="row clearfix">
              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text"><CountUp end={60} duration={2} /></span><i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">monthly visitors</div>
                  <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry has been.</p>
                </div>
              </div>

              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text"><CountUp end={22} duration={1.5} /></span><i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">positive reviews</div>
                  <p>Simply dummy text of the printing and typesetting industry lorem Ipsum has been.</p>
                </div>
              </div>

              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text"><CountUp end={135} duration={1} /></span><i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">secreat recipe</div>
                  <p>Simply dummy text of the printing and typesetting lorem Ipsum has been industry.</p>
                </div>
              </div>

              <div className="fact-block col-lg-3 col-md-6 col-sm-6 col-xs-12">
                <div className="inner clearfix">
                  <div className="fact-count">
                    <div className="count-box">
                      <span className="count-text"><CountUp end={10} duration={1} /></span><i>+</i>
                    </div>
                  </div>
                  <div className="fact-title">award & honnors</div>
                  <p>Ipsum is simply dummy text of the printing and typesetting industry lorem Ipsum.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Whyus


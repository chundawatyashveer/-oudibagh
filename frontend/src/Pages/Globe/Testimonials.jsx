import React, { useState, useRef } from 'react'
import authorThumb1 from '../../assets/images/resource/author-thumb-1.jpg';
import authorThumb2 from '../../assets/images/resource/author-thumb-2.jpg';
import authorThumb3 from '../../assets/images/resource/author-thumb-3.jpg';
import testimonialBg1 from '../../assets/images/background/testimonial-bg1.JPG';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const testimonials = [
  {
    text: "An unforgettable dining experience! Every dish was a masterpiece, and the ambiance was simply perfect. From the first bite to the last, every moment was pure culinary bliss!.",
    img: authorThumb1,
    author: "Sam Jhonson",
  },
  {
    text: "An extraordinary dining journey! The flavors were rich, the presentation stunning, and the atmosphere just right. Each bite felt like art on a plate. Truly a must-try experience!",
    img: authorThumb2,
    author: "Ian Botham",
  },
  {
    text: "Every dish was bursting with flavor and creativity! The ambiance set the mood perfectly. From start to finish, it was a delightful culinary adventure. the presentation stunning!",
    img: authorThumb3,
    author: "Dan Bitson",
  },
  {
    text: "Such a memorable meal! The food was divine, beautifully plated, and the setting was cozy and elegant and delicious. A true gem for food lovers. We'll definitely be back for more!",
    img: authorThumb1,
    author: "Sam Jhonson",
  },
  {
    text: "A delightful feast for all the senses! The food was sensational, and the ambiance added charm to the evening. Each course impressed us. A dining experience worth repeating again.",
    img: authorThumb2,
    author: "Ian Botham",
  },
  {
    text: "From the warm welcome to the last bite, everything was flawless. The dishes were exceptional, the vibe was perfect, and the service was top-notch. An absolute culinary!",
    img: authorThumb3,
    author: "Dan Bitson",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  return (
    <section className="testimonials-section section-kt">
      <div className="auto-container">
        <div className="row clearfix">
          {/*content*/}
          <div className="carousel-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div className="title-box centered">
              <div className="subtitle">
                <span>Reviews</span>
              </div>
              <h2>Happy Testimonials</h2>
            </div>
            <div className="carousel-box">
              {/* Testimonial text and bio above slider */}
              <div className="testimonial-main-content" style={{textAlign: 'center', marginBottom: 32}}>
                <div className="text quote-text" style={{fontSize: '1.25rem', marginBottom: 24}}>
                  {testimonials[activeIndex].text}
                </div>
              </div>
              {/* Swiper slider for thumbnails */}
              <div className="testimonial-thumbs-slider" style={{position: 'relative', width: '100%', maxWidth: 420, margin: '0 auto'}}>
                <Swiper
                  modules={[Autoplay]}
                  slidesPerView={3}
                  centeredSlides={true}
                  loop={true}
                  autoplay={{ delay: 3000, disableOnInteraction: false }}
                  onSwiper={(swiper) => { swiperRef.current = swiper; }}
                  onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
                  className="testi-thumbs-swiper"
                  style={{padding: '16px 0'}}
                  breakpoints={{
                    320: { slidesPerView: 1 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                  }}
                >
                  {testimonials.map((item, idx) => (
                    <SwiperSlide key={idx}>
                      <div className={`slide-item${activeIndex === idx ? ' active' : ''}`} style={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        opacity: activeIndex === idx ? 1 : 0.5,
                        transition: 'opacity 0.3s',
                        height: 120
                      }}>
                        <div className="image" style={{marginBottom: 8}}>
                          <img src={item.img} alt={item.author} style={{
                            width: activeIndex === idx ? 100 : 64,
                            height: activeIndex === idx ? 100 : 64,
                            borderRadius: '50%',
                            objectFit: 'cover',
                            border: activeIndex === idx ? '4px solid #d4af37' : '2px solid #ccc',
                            transition: 'all 0.3s'
                          }} />
                        </div>
                        {activeIndex === idx && (
                          <div
                            style={{
                              marginTop: 8,
                              fontWeight: 600,
                              color: '#d4af37',
                              fontSize: '1rem',
                              letterSpacing: 1,
                              textAlign: 'center',
                              textTransform: 'uppercase'
                            }}
                          >
                            {item.author}
                          </div>
                        )}
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
            </div>
          </div>
          {/*image*/}
          <div className="carousel-img-col col-xl-7 col-lg-7 col-md-12 col-sm-12">
            <div className="carousel-image">
              <div
                className="image-layer"
                style={{
                  backgroundImage: `url(${testimonialBg1})`
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials

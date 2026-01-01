import React, { useRef, useEffect } from "react";
import authorthumb4 from "../../assets/images/resource/author-thumb-4.jpg";
import authorthumb5 from "../../assets/images/resource/author-thumb-5.jpg";
import authorthumb6 from "../../assets/images/resource/author-thumb-6.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const testimonials = [
  {
    text: "A perfect blend of mouthwatering dishes, warm atmosphere, and outstanding service. Every meal feels like a special occasion worth savoring!",
    img: authorthumb4,
    author: "Willium Joe",
    location: "New York",
  },
  {
    text: "Every visit is a flavorful journey! Delicious food, elegant ambiance, and welcoming staff make this restaurant a true dining destination.",
    img: authorthumb5,
    author: "Theresa Tin",
    location: "Chicago",
  },
  {
    text: "From appetizers to desserts, every bite bursts with perfection. A cozy atmosphere and exceptional service make each visit unforgettable.",
    img: authorthumb6,
    author: "Michel Byrd",
    location: "New York",
  },
  {
    text: "The taste of food was really amazing, Wow! Outstanding dinner made by Mater chef John Rute, I never forget this delicious food experience.",
    img: authorthumb4,
    author: "Willium Joe",
    location: "New York",
  },
  {
    text: "Hygienic food & fresh environment, everyone had a wonderful delight experience. It was FABULOUS! Great experience at The Italian gourmet.",
    img: authorthumb5,
    author: "Theresa Tin",
    location: "Chicago",
  },
  {
    text: "Special treat to dine, It was wow experience food was really delicious! Outstanding dinner made by Mater chef, food experience was unforgettable!",
    img: authorthumb6,
    author: "Michel Byrd",
    location: "Denmark",
  },
];

const Testimonial = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      swiperRef.current.params.navigation
    ) {
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <section className="testimonials-two section-kt">
      <div className="auto-container">
        <div className="title-box centered">
          <div className="subtitle">
            <span>testimonials</span>
          </div>
          <h2>What People Are Saying</h2>
        </div>
        <div className="carousel-box">
          <div className="owl-nav">
            <button ref={prevRef} type="button" role="presentation" className="owl-prev">
              <span className="icon fa-light fa-angle-left" />
            </button>
            <Swiper
              modules={[Navigation, Autoplay]}
              onInit={(swiper) => {
                swiperRef.current = swiper;
              }}
              autoplay={{ delay: 4000, disableOnInteraction: false }}
              loop={true}
              spaceBetween={30}
              slidesPerView={1}
              breakpoints={{
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 3 },
              }}
              className="testimonial-slider"
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="testi-block">
                    <div className="inner-box">
                      <div className="rating">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="fa fa-star" />
                        ))}
                      </div>
                      <div className="text">{item.text}</div>
                      <div className="auth-info">
                        <div className="image">
                          <img src={item.img} alt={item.author} />
                        </div>
                        <div className="auth-title">
                          {item.author} - <span className="location">{item.location}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <button ref={nextRef} type="button" role="presentation" className="owl-next">
              <span className="icon fa-light fa-angle-right" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;


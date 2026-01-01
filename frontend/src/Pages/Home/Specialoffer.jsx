import React, { useRef, useEffect }  from 'react'
import { Link } from 'react-router-dom'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import sideimgdish2 from '../../assets/images/resource/sideimg-dish2.png'
import special1 from '../../assets/images/resource/special1.jpg'
import special2 from '../../assets/images/resource/special2.jpg'
import special3 from '../../assets/images/resource/special3.jpg'
import special4 from '../../assets/images/resource/special4.jpg'
import special5 from '../../assets/images/resource/special5.jpg'
import special6 from '../../assets/images/resource/special6.jpg'
import special7 from '../../assets/images/resource/special7.jpg'
import special8 from '../../assets/images/resource/special8.jpg'
import { Navigation } from 'swiper/modules';

  const SpecialOffer = () => {
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
      // @ts-ignore
      swiperRef.current.params.navigation.prevEl = prevRef.current;
      // @ts-ignore
      swiperRef.current.params.navigation.nextEl = nextRef.current;
      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);

  return (
    <div>
     <section className="special-offer section-kt">
  {/* side image */}
  <div className="side-image specialoffer-img">
    <img src={sideimgdish2} alt="image" title="image" />
  </div>
  {/* background text */}
  <div className="bg-text">special dishes</div>
  <div className="outer-container">
    <div className="auto-container">
      <div className="title-box centered">
        <div className="subtitle">
          <span>Popular</span>
        </div>
        <h2>Special Dishes</h2>
      </div>
      {/* Swiper Slider Start */}
      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={30}
        slidesPerView={3}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        className="dish-gallery-slider"
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
          1200: { slidesPerView: 3 },
        }}
      >
        <SwiperSlide>
          <div className="offer-block-two">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special1} alt={special1} />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Greek Salad</Link>
              </h5>
              <div className="text desc">
                flavorful, filled with panko bread crumbs, pine nuts, parsley,
                sun-dried tomatoes.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two margin-top">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special2} alt={special2} />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Chicken Kabab</Link>
              </h5>
              <div className="text desc">
                Chicken Kabab is a traditional dish of India. It is made of chicken that is marinated in a mixture of spices and then cooked on a grill.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special3} alt={special3}  />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Mutton curry</Link>
              </h5>
              <div className="text desc">
                Mutton curry is a traditional dish of India. It is made of mutton that is marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two margin-top">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special4} alt={special4}  />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Briyani</Link>
              </h5>
              <div className="text desc">
                Briyani is a traditional dish of India. It is made of rice that is marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special5} alt={special5} />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Paneer Tikka Masala</Link>
              </h5>
              <div className="text desc">
                Paneer Tikka Masala is a traditional dish of India. It is made of paneer that is marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two margin-top">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special6} alt={special6} />
                </Link>
              </div>
              <div className="cat-name">main dish</div>
              <h5>
                <Link to="/menuone">Dal Fry</Link>
              </h5>
              <div className="text desc">
                Dal Fry is a traditional dish of India. It is made of lentils that are marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                  <img src={special7} alt={special7}  />
                </Link>
              </div>
              <div className="cat-name">appetizer</div>
              <h5>
                <Link to="/menuthree">Boondi Raita</Link>
              </h5>
              <div className="text desc">
                Boondi Raita is a traditional dish of India. It is made of boondi that is marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="offer-block-two margin-top">
            <div className="inner-box">
              <div className="image">
                <Link to="#">
                <img src={special8} alt={special8} />
                </Link>
              </div>
              <div className="cat-name">Main Dish</div>
              <h5>
              <Link to="/menufour">Bajra Roti and lal Chana</Link>
              </h5>
              <div className="text desc">
                Bajra Roti and lal Chana is a traditional dish of India. It is made of bajra that is marinated in a mixture of spices and then cooked in a pot.
              </div>
              
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
      {/* Swiper Slider End */}
      <div className="owl-nav">
        <button type="button" role="presentation" className="owl-prev" ref={prevRef}>
          <span className="icon fa-light fa-angle-left" />
        </button>
        <button type="button" role="presentation" className="owl-next" ref={nextRef}>
          <span className="icon fa-light fa-angle-right" />
        </button>
      </div>
      <div className="lower-link-box text-center">
        <Link to="/menuone" className="theme-btn btn-style-two clearfix">
          <span className="btn-wrap">
            <span className="text-one">view menu</span>
            <span className="text-two">view menu</span>
          </span>
        </Link>
      </div>
    </div>
  </div>
</section>

    </div>
  )
}

export default SpecialOffer

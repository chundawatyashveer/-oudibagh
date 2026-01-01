import React, { useRef, useEffect } from "react";
import gallery1Big from "../../assets/images/gallery/GalleryB-2.jpeg";
import gallery1Sm from "../../assets/images/gallery/GalleryS-2.jpeg";
import gallery2Big from "../../assets/images/gallery/GalleryB-4.JPG";
import gallery2Sm from "../../assets/images/gallery/GalleryS-4.JPG";
import gallery3Big from "../../assets/images/gallery/GalleryB-5.jpeg";
import gallery3Sm from "../../assets/images/gallery/GalleryS-5.jpeg";
import gallery4Big from "../../assets/images/gallery/GalleryB-7.JPG";
import gallery4Sm from "../../assets/images/gallery/GalleryS-7.JPG";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Gallery = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const galleryContainerRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = React.useState(null);

  const slides = [
    { big: gallery1Big, sm: gallery1Sm, alt: "Gallery Image 1" },
    { big: gallery2Big, sm: gallery2Sm, alt: "Gallery Image 2" },
    { big: gallery3Big, sm: gallery3Sm, alt: "Gallery Image 3" },
    { big: gallery4Big, sm: gallery4Sm, alt: "Gallery Image 4" },
    { big: gallery1Big, sm: gallery1Sm, alt: "Gallery Image 5" },
    { big: gallery2Big, sm: gallery2Sm, alt: "Gallery Image 6" },
  ];

  // Initialize Swiper navigation
  useEffect(() => {
    if (
      swiperInstance &&
      prevRef.current &&
      nextRef.current &&
      swiperInstance.params.navigation
    ) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;
      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  // Initialize Fancybox
  useEffect(() => {
    // Wait for jQuery and fancybox to be available
    const initFancybox = () => {
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.fancybox) {
        const $ = window.jQuery;
        
        // Destroy existing fancybox bindings to avoid duplicates
        $('.lightbox-image').off('click.fb-start');
        
        // Initialize fancybox for lightbox images
        if (galleryContainerRef.current) {
          const $galleryImages = $(galleryContainerRef.current).find('.lightbox-image');
          
          if ($galleryImages.length) {
            $galleryImages.fancybox({
              thumbs: {
                autoStart: true
              },
              openEffect: 'fade',
              closeEffect: 'fade',
              helpers: {
                media: {
                  youtube: {
                    params: {
                      autoplay: 1
                    }
                  }
                },
                buttons: {
                  position: 'top'
                }
              },
              loop: true,
              keyboard: true,
              arrows: true,
              infobar: true,
              toolbar: true,
              buttons: [
                'slideShow',
                'fullScreen',
                'thumbs',
                'close'
              ]
            });
          }
        }
      } else {
        // Retry after a short delay if jQuery/fancybox not loaded yet
        setTimeout(initFancybox, 100);
      }
    };

    // Try to initialize after component mounts and DOM is ready
    const timer = setTimeout(initFancybox, 300);

    // Cleanup: destroy fancybox when component unmounts
    return () => {
      clearTimeout(timer);
      if (typeof window !== 'undefined' && window.jQuery && window.jQuery.fn && window.jQuery.fn.fancybox) {
        const $ = window.jQuery;
        // Close any open fancybox instances
        if ($.fancybox && typeof $.fancybox.getInstance === 'function') {
          const instance = $.fancybox.getInstance();
          if (instance) {
            instance.close(true);
          }
        }
        // Remove event bindings
        $('.lightbox-image').off('click.fb-start');
      }
    };
  }, []);

  return (
    <div className="image-gallery" ref={galleryContainerRef}>
      <div className="auto-container">
        <div className="title-box centered" style={{ paddingTop: '30px' }}>
          <div className="subtitle">
            <span>our gallery</span>
          </div>
          <h2>Our Gallery</h2>
        </div>
        <div style={{ position: 'relative', width: '100%' }}>
          <Swiper
            modules={[Navigation, Autoplay]}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
            onSwiper={setSwiperInstance}
            loop={true}
            slidesPerView={2}
            centeredSlides={true}
            spaceBetween={30}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true
            }}
            grabCursor={true}
            keyboard={{
              enabled: true,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
                spaceBetween: 20,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
            }}
            style={{ width: "100%", minHeight: 477 }}
          >
            {slides.map((slide, idx) => (
              <SwiperSlide
                key={idx}
                className="gallery-swiper-slide"
              >
                <div className="gallery-block">
                  <a
                    className="lightbox-image"
                    data-fancybox="gallery"
                    href={slide.big}
                    data-caption={slide.alt}
                  >
                    <img
                      src={slide.sm}
                      alt={slide.alt}
                      className="gallery-block-image"
                      loading="lazy"
                    />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="owl-nav">
            <button
              type="button"
              role="presentation"
              className="owl-prev"
              ref={prevRef}
              aria-label="Previous image"
            >
              <span className="icon fa-light fa-angle-left"></span>
            </button>
            <button
              type="button"
              role="presentation"
              className="owl-next"
              ref={nextRef}
              aria-label="Next image"
            >
              <span className="icon fa-light fa-angle-right"></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;

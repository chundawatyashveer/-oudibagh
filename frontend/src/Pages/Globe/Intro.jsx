import React, { useState } from "react";
import { Link } from "react-router-dom";
import videoBg from "../../assets/images/background/video_bg.jpeg";

const Intro = () => {

  const [ytshow, setYtshow] = useState(false);

  return (
    <div>
      <section className="intro-section ">
       
        <div
          className="image-layer"
          style={{ backgroundImage: `url(${videoBg})` }}
        />
        <div className="auto-container">
          <div className="content-box">
            <div className="play-btn" onClick={() => setYtshow(true)}>
              <Link
                to="#"
                className="lightbox-image theme-btn"
              >
                <span className="icon fa-sharp-duotone fa-solid fa-play">
                  <i className="ripple" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>
      {ytshow && (
        <>
          <div
            className="fancybox-container fancybox-is-open fancybox-can-drag fancybox-show-toolbar"
            role="dialog"
            tabIndex={-1}
            id="fancybox-container-9"
            style={{ transitionDuration: "500ms" }}
          >
            <div className="fancybox-bg" />
            <div className="fancybox-inner">
              <div className="fancybox-infobar">
                <span data-fancybox-index="">1</span>&nbsp;/&nbsp;
                <span data-fancybox-count="">1</span>
              </div>
              <div className="fancybox-toolbar">
                <button
                  data-fancybox-play=""
                  className="fancybox-button fancybox-button--play"
                  title="Start slideshow"
                  style={{ display: "none" }}
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M13,12 L27,20 L13,27 Z" />
                    <path d="M15,10 v19 M23,10 v19" />
                  </svg>
                </button>
                <button
                  data-fancybox-fullscreen=""
                  className="fancybox-button fancybox-button--fullscreen"
                  title="Full screen"
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M9,12 h22 v16 h-22 v-16 v16 h22 v-16 Z" />
                  </svg>
                </button>
                <button
                  data-fancybox-thumbs=""
                  className="fancybox-button fancybox-button--thumbs"
                  title="Thumbnails"
                  style={{ display: "none" }}
                >
                  <svg viewBox="0 0 120 120">
                    <path d="M30,30 h14 v14 h-14 Z M50,30 h14 v14 h-14 Z M70,30 h14 v14 h-14 Z M30,50 h14 v14 h-14 Z M50,50 h14 v14 h-14 Z M70,50 h14 v14 h-14 Z M30,70 h14 v14 h-14 Z M50,70 h14 v14 h-14 Z M70,70 h14 v14 h-14 Z" />
                  </svg>
                </button>
                <button
                  data-fancybox-share=""
                  className="fancybox-button fancybox-button--share"
                  title="Share"
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M6,30 C8,18 19,16 23,16 L23,16 L23,10 L33,20 L23,29 L23,24 C19,24 8,27 6,30 Z" />
                  </svg>
                </button>
                <button onClick={() => setYtshow(false)}
                  data-fancybox-close=""
                  className="fancybox-button fancybox-button--close"
                  title="Close"
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M10,10 L30,30 M30,10 L10,30" />
                  </svg>
                </button>
              </div>
              <div className="fancybox-navigation">
                <button
                  data-fancybox-prev=""
                  className="fancybox-button fancybox-button--arrow_left"
                  title="Previous"
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M10,20 L30,20 L10,20 L18,28 L10,20 L18,12 L10,20" />
                  </svg>
                </button>
                <button
                  data-fancybox-next=""
                  className="fancybox-button fancybox-button--arrow_right"
                  title="Next"
                >
                  <svg viewBox="0 0 40 40">
                    <path d="M30,20 L10,20 L30,20 L22,28 L30,20 L22,12 L30,20" />
                  </svg>
                </button>
              </div>
              <div className="fancybox-stage">
                <div
                  className="fancybox-slide fancybox-slide--iframe fancybox-slide--video fancybox-slide--current fancybox-slide--complete"
                  style={{}}
                >
                  <div className="fancybox-content">
                    <iframe
                      className="fancybox-iframe"
                      frameBorder={0}
                      allowFullScreen
                      allowTransparency
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      src="https://www.youtube.com/embed/zyYTm6sdH3Y?autoplay=1"
                      scrolling="no"
                    />
                  </div>
                </div>
              </div>
              <div className="fancybox-caption-wrap">
                <div className="fancybox-caption" />
              </div>
            </div>
          </div>
        </>
      )

      }
    </div>

  );
};

export default Intro;

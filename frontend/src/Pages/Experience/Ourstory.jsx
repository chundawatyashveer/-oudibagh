import React from 'react'
import { Link } from 'react-router-dom'
import image1 from '../../assets/images/resource/image-1.jpg'
import hygienic from '../../assets/images/resource/hygienic.png'
import ambiance from '../../assets/images/resource/ambiance.png'
const Ourstory = () => {
    return (
        <div>
            <section className="story-section section-kt">
                <div className="auto-container">
                    <div className="title-box centered">
                        <div className="subtitle">
                            <span>our story</span>
                        </div>
                        <h2>
                            Where Exquisite Flavors Meet{" "}
                            <span className="theme_color">Elegant Ambiance</span> for an{" "}
                            <span className="theme_color">Unforgettable Fine Dining </span>{" "}
                            Experience!
                        </h2>
                    </div>
                    <div className="row clearfix">
                        <div className="text-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div
                                className="inner wow fadeInLeft"
                                data-wow-duration="1500ms"
                                data-wow-delay="0ms"
                            >
                                <div className="text">
                                    {" "}
                                    Lorem Ipsum is simply dummy text of the printingand typesetting
                                    industry lorem Ipsum has been the industrys standard dummy text ever
                                    since the when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book It has survived not only
                                    five centuries, but also the leap into.
                                </div>
                                <div className="feature-info">
                                    <div className="feature-info-box">
                                        <div className="feature-title">
                                            <img src={hygienic} alt="hygienic" />
                                            <h6>
                                                Hygienic <br /> Food{" "}
                                            </h6>
                                        </div>
                                        <div className="infotext">
                                            {" "}
                                            Lorem Ipsum is simply dummy text of the printing and type
                                            setting dummy text.
                                        </div>
                                    </div>
                                    <div className="feature-info-box">
                                        <div className="feature-title">
                                            <img src={ambiance} alt="ambiance" />
                                            <h6>
                                                fresh <br /> Ambience{" "}
                                            </h6>
                                        </div>
                                        <div className="infotext">
                                            {" "}
                                            Lorem Ipsum is simply dummy text of the printing and type
                                            setting dummy text.
                                        </div>
                                    </div>
                                </div>
                                <div className="booking-info">
                                    <div className="bk-title">
                                        Booking Request : <br />
                                        <a className="bk-no" href="tel:+80-400-123456">
                                            +80 (400) 123 4567
                                        </a>
                                    </div>
                                    <div className="link-box">
                                        <Link to="/about" className="theme-btn btn-style-two clearfix">
                                            <span className="btn-wrap">
                                                <span className="text-one">book a table</span>
                                                <span className="text-two">book a table</span>
                                            </span>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="image-col col-xl-6 col-lg-6 col-md-12 col-sm-12">
                            <div
                                className="inner wow fadeInRight"
                                data-wow-duration="1500ms"
                                data-wow-delay="0ms"
                            >
                                <div className="images parallax-scene-1">
                                    <div className="image" data-depth="0.15">
                                        <img src={image1} alt="image1" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    )
}

export default Ourstory


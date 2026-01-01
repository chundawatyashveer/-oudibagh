import React from "react";
import { Link } from "react-router-dom";
import menucardCornerLeftTop from "../../assets/images/resource/menucard-corner-left-top.png";
import menucardCornerRightTop from "../../assets/images/resource/menucard-corner-right-top.png";
import menucardCornerLeftBottom from "../../assets/images/resource/menucard-corner-left-bottom.png";
import menucardCornerRightBottom from "../../assets/images/resource/menucard-corner-right-bottom.png";
import appetizers1 from "../../assets/images/resource/appetizers1.jpg";
import maindish1 from "../../assets/images/resource/maindish1.jpg";
import dessert1 from "../../assets/images/resource/dessert1.jpg";

const Menu = () => {
  return (
    <div>
      <section className="menu-card-style-section section-kt">
        <div className="auto-container">
          <div className="menu-card-main">
            {/* menu card corner images */}
            <img
              className="menu-card-corner top-left"
              src={menucardCornerLeftTop}
              alt="menucardCornerLeftTop"
            />
            <img
              className="menu-card-corner top-right"
              src={menucardCornerRightTop}
              alt="menucardCornerRightTop"
            />
            <img
              className="menu-card-corner bottom-left"
              src={menucardCornerLeftBottom}
              alt="menucardCornerLeftBottom"
            />
            <img
              className="menu-card-corner bottom-right"
              src={menucardCornerRightBottom}
              alt="menucardCornerRightBottom"
            />

            {/* non-veg menu box */}
            <div className="menu-card-style alternate">
              <div className="row clearfix">
                <div className="image-col col-lg-6 col-md-12 col-sm-12" style={{paddingLeft: '80px'}}>
                  <div className="inner">
                    <div className="image" style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
                      <img src={appetizers1} alt="Rajvanshiy Masahar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="title-box">
                      <h4>Rajvanshiy Masahar</h4>
                    </div>

                          
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">Chicken Roasted</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                          
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            A royal style roasted chicken, slow-cooked to perfection, 
                            with a crispy skin and juicy meat.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Chicken Curry{" "}
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                          
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            A heritage chicken curry, cooked with a blend of traditional spices and herbs, 
                            ensuring a rich and reminiscent of old kitchen fires.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">Mutton Curry</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            Tender mutton cooked in a classic slow-brewed gravy, inspired by princely feasts.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Chicken Kabab <span className="s-info">NEW</span>
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            Succulent Kebabs marinated in age-old spices,
                            grilled in true nawabi fashion.                          
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* menu box */}
            <div className="menu-card-style">
              <div className="row clearfix">
                <div className="image-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="image" style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
                      <img src={maindish1} alt="maindish1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner">
                    <div className="title-box ">
                      <h4>Shakahari Rajvilas</h4>
                    </div>


                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">Dal Fry</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            Golden yellow lentils tempered with ghee and spices,
                            reminiscent of age-old haveli kitchen.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Paneer Tikka Masala{" "}
                                <span className="s-info">new</span>
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            Char-grilled paneer cubes immersed in a regal,
                            creamy masala inspired by royal banquets.                          
                          </Link>
                        </div>
                      </div>
                    </div>


                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">Tamatar Bhaji</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          A simple yet soulful tomato curry prepared in the
                          rustic style of countryside hearths.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Mushroom Masala <span className="s-info">NEW</span>
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          Tender mushrooms simmered in a rich, heritage-
                          style onion-tomato gravy.                          
                          </Link>
                        </div>
                      </div>
                    </div>
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Hara Bhara Kebab<span className="s-info">NEW</span>
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          Wholesome green kebabs made with spinach and
                          peas, echoing flavours of old royal retreats.                  
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* menu box */}
            <div className="menu-card-style alternate last">
              <div className="row clearfix">
                <div className="image-col col-lg-6 col-md-12 col-sm-12"style={{paddingLeft: '80px'}}>
                  <div className="inner">
                    <div className="image" style={{ height: '500px', width: '100%', overflow: 'hidden' }}>
                      <img src={dessert1} alt="dessert1" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </div>
                  </div>
                </div>
                <div className="menu-col col-lg-6 col-md-12 col-sm-12">
                  <div className="inner">
                    

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">jira Rice</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          Soft, fragrant steamed rice served in the simple,
                          graceful style of traditional households.                          
                          </Link>
                        </div>
                      </div>
                    </div>


                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Hello To The Queen <span className="s-info">new</span>
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                            A majestic dessert layered with bananas,biscuits, nuts, 
                            and ice cream fit for royal indulgence.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">Boondi Raita</Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          Fresh curd blended with crisp boondi, a timeless
                          accompaniment from Rajasthani kitchens.                          
                          </Link>
                        </div>
                      </div>
                    </div>

                    
                    <div className="dish-block">
                      <div className="inner-box">
                        <div className="title clearfix">
                          <div className="ttl clearfix">
                            <h6>
                              <Link to="#">
                                Roti 
                              </Link>
                            </h6>
                          </div>{" "}
                          <span className="menu-list-line"> </span>
                        </div>
                        <div className="text desc">
                          <Link to="#">
                          Hand-rolled rotis prepared in the authentic rustic
                          manner of rural chulhas.                         
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;


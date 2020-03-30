import React from "react";

import food1 from "../img/food/food1.jpg";
import food2 from "../img/food/food2.png";
import food3 from "../img/food/food3.jpg";
import food4 from "../img/food/food4.png";
import food5 from "../img/food/food5.jpg";
import food6 from "../img/food/food6.jpg";
import food7 from "../img/food/food7.jpg";
import food8 from "../img/food/food8.jpg";

const About = () => {
  return (
    <div className="site-main">
      <section className="home_banner_area common-banner">
        <div className="banner_inner">
          <div className="container-fluid no-padding">
            <div className="row fullscreen"></div>
          </div>
        </div>
      </section>
      <div className="row banner-bottom common-bottom-banner align-items-center justify-content-center">
        <div className="col-lg-8 offset-lg-4">
          <div className="banner_content">
            <div className="row d-flex align-items-center">
              <div className="col-lg-7 col-md-12">
                <h1>About Us</h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women.
                </p>
              </div>
              <div className="col-lg-5 col-md-12">
                <div className="page-link-wrap">
                  <div className="page_link">
                    <a href="index.html">Home</a>
                    <a href="about-us.html">About Us</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="breakfast-area section_gap_top">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-5">
              <div className="left-content">
                <h1>Daily Food Courses with Drinks </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <a href="#" className="primary-btn">
                  See Full Menu
                </a>
              </div>
            </div>
            <div className="col-lg-6 offset-lg-1">
              <div className="right-img">
                <img className="img1 img-fluid" src={food1} alt="" />
                <img className="img2 img-fluid" src={food2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="section_gap_top food-gallery-area">
        <div className="container-fluid no-padding">
          <div className="row owl-carousel active-food-gallery">
            <div className="single-gallery-item">
              <img className="img-fluid" src={food5} alt="" />
            </div>

            <div className="single-gallery-item">
              <img className="img-fluid" src={food6} alt="" />
            </div>

            <div className="single-gallery-item">
              <img className="img-fluid" src={food7} alt="" />
            </div>

            <div className="single-gallery-item">
              <img className="img-fluid" src={food8} alt="" />
            </div>

            <div className="single-gallery-item">
              <img className="img-fluid" src={food6} alt="" />
            </div>

            <div className="single-gallery-item">
              <img className="img-fluid" src={food8} alt="" />
            </div>
          </div>
        </div>
      </section>

      <div className="breakfast-area lunch-area section_gap">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 ">
              <div className="right-img">
                <img className="img1 img-fluid" src={food3} alt="" />
                <img className="img2 img-fluid" src={food4} alt="" />
              </div>
            </div>
            <div className="col-lg-5 offset-lg-1">
              <div className="left-content">
                <h1>Daily Food Courses with Drinks </h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation.
                </p>
                <div className="chef-title">
                  <div className="thumb">
                    <img src="img/about-author.png" alt="" />
                  </div>
                  <div className="c-desc">
                    <h6>Marvel Maison</h6>
                    <p>Chief Executive, Amazon</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="brands-area section_gap_bottom">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="main_title">
                <h1>In associasion with</h1>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <div className="col-lg-10">
              <div className="owl-carousel brand-carousel">
                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo1.png" alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo2.png" alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo3.png" alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo4.png" alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo5.png" alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src="img/brands/logo3.png" alt="" />
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

export default About;

import React from "react";
import playIcon from "../img/banner/playIcon.png";
import food1 from "../img/food/food1.jpg";
import food2 from "../img/food/food2.png";
import food3 from "../img/food/food3.jpg";
import food4 from "../img/food/food4.png";
import food5 from "../img/food/food5.jpg";
import food6 from "../img/food/food6.jpg";
import food7 from "../img/food/food7.jpg";
import food8 from "../img/food/food8.jpg";
import chef1 from "../img/chef/chef1.jpg";
import logo1 from "../img/brands/logo1.png";
import logo2 from "../img/brands/logo2.png";
import logo3 from "../img/brands/logo3.png";
import logo4 from "../img/brands/logo4.png";
import logo5 from "../img/brands/logo5.png";
import signature from "../img/chef/signature.png";
import aboutAuthor from "../img/aboutAuthor.png";
import item1 from "../img/chef/item1.png";
import item2 from "../img/chef/item2.png";
import item3 from "../img/chef/item3.png";
import item4 from "../img/chef/item4.png";

import ReservationForm from "../components/ReservationForm"

const Landing = () => {
  return (
    <div className="site-main">
      <section className="home_banner_area">
        <div className="banner_inner">
          <div className="container-fluid no-padding">
            <div className="row fullscreen"></div>
          </div>
        </div>
      </section>
      <div className="row banner-bottom align-items-center justify-content-center">
        <div className="col-lg-4">
          <div className="video-popup d-flex align-items-center">
            <a
              className="play-video video-play-button animate"
              href="https://www.youtube.com/watch?v=KUln2DXU5VE"
              data-animate="zoomIn"
              data-duration="1.5s"
              data-delay="0.1s"
            >
              <span>
                <img src={playIcon} alt="" />
              </span>
            </a>
            <div className="watch">
              <h6>Watch video</h6>
              <p>You will love our execution</p>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="banner_content">
            <div className="row d-flex align-items-center">
              <div className="col-lg-8 col-md-12">
                <p className="top-text">Steak Shop offers best steak in town</p>
                <h1>Steak Shop offers best steak in town</h1>
                <p>
                  inappropriate behavior is often laughed off as “boys will be
                  boys,” women face higher conduct standards especially in the
                  workplace. That’s why it’s crucial that, as women.
                </p>
              </div>
              <div className="col-lg-4 col-md-12">
                <div className="banner-btn">
                  <a className="primary-btn text-uppercase" href="#">
                    Explore Menu
                  </a>
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
                    <img src={aboutAuthor} alt="" />
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

      <ReservationForm />

      <div className="chef-area section_gap_top">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-6">
              <div className="left-chef">
                <img className="img-fluid" src={chef1} alt="" />
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
                <img src={signature} alt="" />
              </div>
            </div>
          </div>
          <div className="row chef-items">
            <div className="col-lg-12 offset-lg-1">
              <div className="row">
                <div className="col-lg-2 col-md-5">
                  <div className="single-chef-item">
                    <a href="#" className="img-popup">
                      <img src={item1} alt="" />
                    </a>
                  </div>
                </div>
                <div className="col-lg-2 col-md-5">
                  <div className="single-chef-item">
                    <a href={food6} className="img-popup">
                      <img src={item2} alt="" />
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-5">
                  <div className="single-chef-item">
                    <a href={food7} className="img-popup">
                      <img src={item3} alt="" />
                    </a>
                  </div>
                </div>

                <div className="col-lg-2 col-md-5">
                  <div className="single-chef-item">
                    <a href="#" className="img-popup">
                      <img src={item4} alt="" />
                    </a>
                  </div>
                </div>
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

      <section className="brands-area section_gap">
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
                    <img src={logo1} alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src={logo2} alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src={logo3} alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src={logo4} alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src={logo5} alt="" />
                  </div>
                </div>

                <div className="single-brand-item d-table">
                  <div className="d-table-cell">
                    <img src={logo3} alt="" />
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

export default Landing;

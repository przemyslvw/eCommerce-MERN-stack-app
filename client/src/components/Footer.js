import React from "react";

const Footer = () => {
  return (
    <footer className="footer-area overlay">
      <div className="container">
        <div className="row">
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-widget">
              <h6>Top Products</h6>
              <div className="row">
                <div className="col">
                  <ul className="list">
                    <li>
                      <a href="#">Managed Website</a>
                    </li>
                    <li>
                      <a href="#">Manage Reputation</a>
                    </li>
                    <li>
                      <a href="#">Power Tools</a>
                    </li>
                    <li>
                      <a href="#">Marketing Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-widget">
              <h6>Quick Links</h6>
              <div className="row">
                <div className="col">
                  <ul className="list">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Brand Assets</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-widget">
              <h6>Features</h6>
              <div className="row">
                <div className="col">
                  <ul className="list">
                    <li>
                      <a href="#">Jobs</a>
                    </li>
                    <li>
                      <a href="#">Brand Assets</a>
                    </li>
                    <li>
                      <a href="#">Investor Relations</a>
                    </li>
                    <li>
                      <a href="#">Terms of Service</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2 col-md-4 col-sm-6">
            <div className="single-footer-widget">
              <h6>Resources</h6>
              <div className="row">
                <div className="col">
                  <ul className="list">
                    <li>
                      <a href="#">Guides</a>
                    </li>
                    <li>
                      <a href="#">Research</a>
                    </li>
                    <li>
                      <a href="#">Experts</a>
                    </li>
                    <li>
                      <a href="#">Agencies</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-8">
            <div className="single-footer-widget">
              <h6>Newsletter</h6>
              <p>Stay update with our latest</p>
              <div className="" id="mc_embed_signup">
                <form
                  target="_blank"
                  novalidate="true"
                  action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&amp;id=92a4423d01"
                  method="get"
                  className="form-inline"
                >
                  <div className="d-flex flex-row">
                    <input
                      className="form-control"
                      name="EMAIL"
                      placeholder="Your email address"
                      required=""
                      type="email"
                    />
                    <button className="click-btn btn btn-default">
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </button>
                    <div
                      style={{
                        position: "absolute",
                        left: "-5000px"
                      }}
                    >
                      <input
                        name="b_36c4fd991d266f23781ded980_aefe40901a"
                        value=""
                        type="text"
                      />
                    </div>
                  </div>
                  <div className="info"></div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row footer-bottom justify-content-between">
          <div className="col-lg-6">
            <p className="footer-text m-0">
              Copyright &copy;
              <script>document.write(new Date().getFullYear());</script> All
              rights reserved | This template is made with{" "}
              <i className="fa fa-heart-o" aria-hidden="true"></i> by{" "}
              <a href="https://colorlib.com" target="_blank">
                Colorlib
              </a>
            </p>
          </div>
          <div className="col-lg-2">
            <div className="social-icons">
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fa fa-dribbble"></i>
              </a>
              <a href="#">
                <i className="fa fa-behance"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

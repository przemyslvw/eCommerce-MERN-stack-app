import React from "react";

const BookTable = () => {
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
                <h1>Book table</h1>
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
                    <a href="book-table.html">Book Table</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="reservation-area section_gap_top">
        <div className="container">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-6 offset-lg-6">
              <div className="contact-form-section">
                <h1>Reservation Form</h1>
                <form
                  className="contact-form-area contact-page-form contact-form text-right"
                  id="myForm"
                  action="mail.html"
                  method="post"
                >
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"

                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="email"
                      placeholder="Email Address"

                    />
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="subject"
                      name="subject"
                      placeholder="Phone Number"

                    />
                  </div>
                  <div className="form-group col-md-12">
                    <div className="form-select">
                      <select>
                        <option value="1">Number of people</option>
                        <option value="1">Select event Dhaka</option>
                        <option value="1">Select event Dilli</option>
                        <option value="1">Select event Newyork</option>
                        <option value="1">Select event Islamabad</option>
                      </select>
                    </div>
                  </div>
                  <div className="form-group col-md-12">
                    <input
                      type="text"
                      className="form-control"
                      id="datepicker"
                      name="text"
                      placeholder="Select Date & Time"

                    />
                  </div>
                  <div className="form-group col-md-12">
                    <div className="form-select">
                      <select>
                        <option value="1">Select event</option>
                        <option value="1">Select event Dhaka</option>
                        <option value="1">Select event Dilli</option>
                        <option value="1">Select event Newyork</option>
                        <option value="1">Select event Islamabad</option>
                      </select>
                    </div>
                  </div>
                  <div className="col-lg-12 text-center">
                    <button className="primary-btn text-uppercase">
                      Make Reservation
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookTable;

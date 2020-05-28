import React from "react";
import ReservationForm from "../components/ReservationForm"

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
      <ReservationForm />
    </div>
  );
};

export default BookTable;

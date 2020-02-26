import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./pages/Landing";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import "./css/bootstrap.css";
import "./vendors/linericon/style.css";
import "./css/font-awesome.min.css";
import "./css/magnific-popup.css";
import "./vendors/lightbox/simpleLightbox.css";
import "./vendors/nice-select/css/nice-select.css";
import "./vendors/animate-css/animate.css";
import "./css/style.css";

class App extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Route exact path="/" component={Landing} />
        <Footer />
      </Router>
    );
  }
}

export default App;

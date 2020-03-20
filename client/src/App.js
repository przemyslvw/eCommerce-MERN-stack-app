import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Landing from "./pages/Landing";
import { Provider } from "react-redux";

import Menu from "./pages/Menu";
import About from "./pages/About";
import Register from "./pages/Register";
import BookTable from "./pages/BookTable";
import Login from "./pages/Login";
import ErrorPage from "./pages/ErrorPage";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import store from "./store";

import "./app.css";
import "./css/bootstrap.css";
import "./vendors/linericon/style.css";
import "./css/font-awesome.min.css";
import "./css/magnific-popup.css";
import "./vendors/lightbox/simpleLightbox.css";
import "./vendors/nice-select/css/nice-select.css";
import "./vendors/animate-css/animate.css";
import "./css/style.css";

import setAutchToken from "./auth/setAuthToken";
import { loadUser } from './actions/auth'

if (localStorage.getItem("token")) {
  setAutchToken(localStorage.getItem("token"));
}

const App = () => {

  useEffect(() => {
    store.dispatch(loadUser());
  },[])
  return (
    <Provider store={store}>
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/menu" component={Menu} />
        <Route exact path="/about" component={About} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/book-table" component={BookTable} />
        <Route exact component={ErrorPage} />
      </Switch>
      <Footer />
    </Router>
  </Provider>
  )
}

export default App;

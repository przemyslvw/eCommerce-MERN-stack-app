import React from "react";

const Login = () => {
  return (
    <div className="page-wrapper">
      <header>Login</header>
      <div className="mt-10 inputs-wrapper">
        <input
          type="text"
          name="firstName"
          placeholder="E-mail"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'First Name'"
          required
          className="single-input"
        />
        <input
          type="password"
          name="pass"
          placeholder="Password"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'First Name'"
          required
          className="single-input"
        />
      </div>
      <div>
        <a href="#" className="genric-btn success">
          Submit
        </a>
      </div>
    </div>
  );
};

export default Login;

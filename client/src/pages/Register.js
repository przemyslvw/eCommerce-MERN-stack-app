import React from "react";

const Register = () => {
  return (
    <div className="page-wrapper">
      <header>Register</header>
      <div className="mt-10 inputs-wrapper">
        <input
          type="text"
          name="first_name"
          placeholder="E-mail"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'First Name'"
          required
          className="single-input"
        />
        <input
          type="text"
          name="first_name"
          placeholder="Username"
          onfocus="this.placeholder = ''"
          onblur="this.placeholder = 'First Name'"
          required
          className="single-input"
        />
        <input
          type="password"
          name="first_name"
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

export default Register;

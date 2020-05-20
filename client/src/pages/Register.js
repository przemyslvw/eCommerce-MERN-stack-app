import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../actions/auth';

const Register = ({ registerUser, auth }) => {

    const [ data,setData ] = useState({
        email: '',
        username: '',
        password: ''
    });

    const { username,password,email } = data;

    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const onSubmit = e => {
        registerUser(username,password,email);
    }

    //Sprawdzanie czy użytkownik jest zalogowany
    if(auth.isAuthenticated){
        return <Redirect to="/"/>
    }

    return (
        <div className="page-wrapper">
            <header>
            Register
            </header>
	        <div className="mt-10 inputs-wrapper">
				<input type="text" placeholder="E-mail" onChange={(e) => onChange(e)} value={ email } name="email"
				required className="single-input"/>
                <input type="text" name="username" onChange={(e) => onChange(e)} value={ username }  placeholder="Username"
				required className="single-input"/>
                <input type="password" name="password" onChange={(e) => onChange(e)} value={ password }  placeholder="Password"
				required className="single-input"/>
			</div>
            <div onClick={() => onSubmit()}>
                <a href="#" className="genric-btn success">Submit</a>
            </div>
        </div>
    )
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(mapStateToProps,{ registerUser })(Register);

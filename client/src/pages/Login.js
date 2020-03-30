import React, { useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/auth';

const Login = ({ login}) => {
    const [ data,setData ] = useState({
        email: '',
        password: ''
    });

    const { email,password } = data;

    const onChange = e => {
        setData({...data, [e.target.name]: e.target.value});
    }

    const onSubmit = () => {
        login(password,email);
    }

    return (
        <div className="page-wrapper">
            <header>
            Login
            </header>
	        <div className="mt-10 inputs-wrapper">
				<input type="text" name="email" placeholder="E-mail" value={ email } onChange={(e) => onChange(e)}
				required className="single-input"/>
                <input type="password" name="password" placeholder="Password" value={ password } onChange={(e) => onChange(e)}
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

export default connect(mapStateToProps, { login })(Login);
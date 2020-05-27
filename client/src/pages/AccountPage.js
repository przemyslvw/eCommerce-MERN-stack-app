import React from 'react';
import Spinner from '../spinner';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const AccountPage = ({auth}) => {
    if(!auth.isAuthenticated) {
        alert('You are not logged in');
        return <Redirect to="/login"/>
    };
    return auth.user === null ? (
        <div
        style={{
            display: 'flex',
            width: '100vw',
            height: '100vh',
            justifyContent: 'center',
            alignItems: 'center'
        }}
        >
            <Spinner />
        </div>
    ) : (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100vw',
                height: '100vh'
            }}
        >
            <div style={{ display: 'flex' }}>
                <h3>Username: </h3><p> { auth.user.username }</p>
            </div>

            <br/>

            <div style={{ display: 'flex' }}>
                <h3>E-mail:</h3> <p> { auth.user.email }</p>
            </div>
        </div>
    );
};

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(mapStateToProps)(AccountPage);

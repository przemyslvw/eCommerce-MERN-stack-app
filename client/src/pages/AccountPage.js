import React from "react";
import Spinner from '../spinner'
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
      // height: '100vh',
      justifyContent: 'center',
      alignContent: 'center'
    }}>
      <Spinner />
    </div>
  ) : (
    <div>
      User name : { auth.user.username }
      email: { auth.user.email }
    </div>
  );
};

const mapStateToProps = state => ({
  auth: state.auth
})

export default connect(mapStateToProps)(AccountPage);

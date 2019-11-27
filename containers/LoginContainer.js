import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  userLogin,
  
} from '../actions';
import Login from '../components/Auth/Login';

class LoginContainer extends Component {
  componentDidMount(){
    console.log('Component did mount');
  }

  componentDidUpdate() {
    console.log('component did update');
  }



  loginButton = () => {
    console.log('Login Click')
  }


  render() {
    return (
      <Login
        { ...this.props }
        loginButton={this.loginButton}
      />
    );
  }
}

const mapStateToProps = state => {
  return state.home;
}

const mapDispatchToProps = {
  userLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

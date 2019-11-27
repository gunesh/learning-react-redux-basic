import React, { Component } from "react";
import { connect } from "react-redux";
import { loginAction } from "../actions";
import '../components/Auth/Login/Login.css';


class LoginContainer extends Component {
  constructor(props){
    super(props);
    this.loginAction = this.loginAction.bind();
  }

  loginAction =()=>{
    this.props.loginAction();
  }
  componentDidMount() {}

  componentDidUpdate() {}
  render() {
    console.log( this.props);
    return (
      <>
        <div className="container">
          Login Page New
          <br />
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />
          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />
          <button type="submit" onClick={this.loginAction}>
            Login
          </button>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.login;
};

const mapDispatchToProps = {
  loginAction
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginContainer);

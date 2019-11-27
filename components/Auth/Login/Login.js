import React from 'react';
import './Login.css';


class Login extends React.Component{
  constructor(props){
    super(props);
    this.loginAction = this.loginAction.bind();
  }

  loginAction =()=>{
    console.log('User click on login button');
  }
  render(){
    return <>
    <div className="container">
      Login Page<br />
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit" onClick={this.loginAction}>Login</button>
    </div>
    </>
  }
}


export default Login;
import React from 'react';
import './Register.css';

class Register extends React.Component{
  constructor(props){
    super(props);
    this.registerAction = this.registerAction.bind();
  }

  registerAction =()=>{
    console.log('User click on Register button');
  }
  render(){
    return <>
    <div className="container">
      Register Page<br />
      <label htmlFor="uname"><b>Username</b></label>
      <input type="text" placeholder="Enter Username" name="uname" required />
      <label htmlFor="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter Password" name="psw" required />
      <button type="submit" onClick={this.registerAction}>Register</button>
    </div>
    </>
  }
}


export default Register;
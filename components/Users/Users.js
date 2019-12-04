import React, { Component } from "react";
import User from "./User.js";

export default class Users extends Component {
  render() {
    let users = this.props.usersList;
    console.log(users);
    const trItem = users.map((item, index) => (
      <User
        key={index}
        user={item}
        index={index}
        editStudentSubmit={this.props.editStudentSubmit}
        deleteStudent={this.props.deleteStudent}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}

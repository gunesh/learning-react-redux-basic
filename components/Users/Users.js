import React, { Component } from "react";
import User from "./User.js";
import { log } from '../helpers';

export default class Users extends Component {
  render() {
    let users = this.props.usersList;
    const trItem = users.map((item, index) => (
      <User
        key={index}
        user={item}
        index={index}
        editUserSubmit={this.props.editUserSubmit}
        deleteUser={this.props.deleteUser}
      />
    ));
    return <tbody>{trItem}</tbody>;
  }
}

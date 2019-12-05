import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editUser = this.editUser.bind(this);
    this.editUserSubmit = this.editUserSubmit.bind(this);
    this.deleteUser = this.deleteUser.bind(this);
    this.editCancel = this.editCancel.bind(this);
  }
  deleteUser() {
    const { id } = this.props.users;
    this.props.deleteUser(id);
  }
  editUser() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  editUserSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    console.log(this.props.user.id);
    this.props.editUserSubmit(
      this.props.user.id,
      this.nameInput.value,
      this.gradeInput.value,
      this.schoolInput.value
    );
  }
  editCancel() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  render() {
    const { id, first_name, last_name, email } = this.props.user;
    return this.state.isEdit === true ? (
      <tr className="bg-warning" key={this.props.index}>
        <td>{id}</td>
        <td>
          <input
            ref={nameInput => (this.nameInput = nameInput)}
            defaultValue={first_name}
          />
        </td>
        <td>
          <input
            defaultValue={last_name}
            ref={gradeInput => (this.gradeInput = gradeInput)}
          />
        </td>
        <td>
          <input
            ref={schoolInput => (this.schoolInput = schoolInput)}
            defaultValue={email}
          />
        </td>
        <td>
          <button onClick={this.editUserSubmit}>Update</button>&nbsp;
          <button onClick={this.editCancel}>Cancel</button>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>
          <button onClick={this.editUser}>Edit</button> &nbsp;
          <button onClick={this.deleteUser}>Delete</button>
        </td>
      </tr>
    );
  }
}

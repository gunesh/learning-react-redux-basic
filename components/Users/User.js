import React, { Component } from "react";

export default class User extends Component {
  constructor(props) {
    super(props);
    this.state = { isEdit: false };
    this.editStudent = this.editStudent.bind(this);
    this.editStudentSubmit = this.editStudentSubmit.bind(this);
    this.deleteStudent = this.deleteStudent.bind(this);
  }
  deleteStudent() {
    const { id } = this.props.student;
    this.props.deleteStudent(id);
  }
  editStudent() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
  }
  editStudentSubmit() {
    this.setState((prevState, props) => ({
      isEdit: !prevState.isEdit
    }));
    this.props.editStudentSubmit(
      this.props.user.id,
      this.nameInput.value,
      this.gradeInput.value,
      this.schoolInput.value
    );
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
          <button onClick={this.editStudentSubmit}>Update</button>&nbsp;
          <button onClick={this.editStudentSubmit}>Cancel</button>
        </td>
      </tr>
    ) : (
      <tr key={this.props.index}>
        <td>{id}</td>
        <td>{first_name}</td>
        <td>{last_name}</td>
        <td>{email}</td>
        <td>
          <button onClick={this.editStudent}>Edit</button> &nbsp;
          <button onClick={this.deleteStudent}>Delete</button>
        </td>
      </tr>
    );
  }
}

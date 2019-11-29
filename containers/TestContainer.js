import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, showLoadingSpinner } from "../actions";

class TestContainer extends Component {
  state = {
    addForm: false,
    editForm: false,
    firstName: "",
    lastName: "",
    email: ""
  };
  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {}

  getUsers = () => {
    this.props.showLoadingSpinner();
    this.props.getUsers();
  };

  getTemplate(element, index) {
    return (
      <tr key={index}>
        <td>{element.id}</td>
        <td>{element.first_name}</td>
        <td>{element.last_name}</td>
        <td>{element.email}</td>
        <td>
          <button onClick={this.doEdit}>Edit</button>
          <button>Delete</button>
        </td>
      </tr>
    );
  }

  doAdd = event => {
    this.setState({ addForm: true, editForm: false });
  };
  doCancel = event => {
    this.setState({ addForm: false });
  };
  doSave = event => {
    event.preventDefault();
    var newUserObj = {
      first_name: event.target.first_name.value,
      last_name: event.target.last_name.value,
      email: event.target.email.value
    };
    console.log(newUserObj);
  };
  doEdit = event => {
    this.setState({ addForm: false, editForm: true });
  };

  doEditCancel = event => {
    this.setState({ editForm: false });
  };
  doEditSave = event => {
    event.preventDefault();
    console.log("record updated");
  };

  render() {
    return (
      <>
        <div className="rmdb-home-grid">
          <br />

          <br />
          {this.state.addForm ? (
            <div>
              <form onSubmit={this.doSave}>
                <br />
                <input type="text" name="first_name" placeholder="First Name" />
                <br />
                <br />
                <input type="text" name="last_name" placeholder="Last Name" />
                <br />
                <br />
                <input type="text" name="email" placeholder="Email" />
                <br />
                <br />
                <button onClick={this.doCancel}>Cancel</button> &nbsp;
                <button type="submit">Save</button>
              </form>
            </div>
          ) : (
            <div>
              <button onClick={this.doAdd}>+ Add </button>
            </div>
          )}
          {this.state.editForm ? (
            <div>
              <form onSubmit={this.doEditSave}>
                <br />
                <input type="text" name="first_name" placeholder="First Name" />
                <br />
                <br />
                <input type="text" name="last_name" placeholder="Last Name" />
                <br />
                <br />
                <input type="text" name="email" placeholder="Email" />
                <br />
                <br />
                <button onClick={this.doEditCancel}>Cancel</button> &nbsp;
                <button type="submit">Update</button>
              </form>
            </div>
          ) : (
            <div />
          )}
          <br />
          <table width="100%" border="1">
            <thead>
              <tr>
                <th>Id</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>
              {this.props.users.map((element, i) =>
                this.getTemplate(element, i)
              )}
            </tbody>
          </table>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.users;
};

const mapDispatchToProps = {
  getUsers,
  showLoadingSpinner
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

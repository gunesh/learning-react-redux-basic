import React, { Component } from "react";
import { connect } from "react-redux";
import {
  getUsers,
  getUsersDummy,
  showLoadingSpinner,
  addNewUser,
  addUser,
  deleteUser,
  updateUser
} from "../actions";

import Users from "../components/Users/Users";

class TestContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      addForm: false,
      editForm: false,
      first_name: "",
      last_name: "",
      email: ""
    };
    this.deleteUser = this.deleteUser.bind(this);
    this.editUserSubmit = this.editUserSubmit.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {}

  getUsers = () => {
    this.props.showLoadingSpinner();
    this.props.getUsers();
    this.props.getUsersDummy();
  };


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
      email: event.target.email.value,
      id: "",
      avatar: ""
    };
    var newUserObj = {
      name: "TEST",
      job: "TEACHER"
    };
    this.props.addNewUser(newUserObj);
  };
  doEdit = element => {
    this.setState({
      addForm: false,
      editForm: true,
      first_name: element.first_name,
      last_name: element.last_name,
      email: element.email
    });
  };



  deleteUser(id) {
    let r = window.confirm("Do you want to delete this item");
    if (r === true) {
      this.props.deleteUser(id);
    }
  }
  editUserSubmit(id, first_name, last_name, email) {
    console.log(this.props);
    this.props.updateUser({
      id: id,
      first_name: first_name,
      last_name: last_name,
      email: email
    });
  }

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
                <input
                  type="text"
                  name="first_name"
                  value={this.state.first_name}
                  placeholder="First Name"
                />
                <br />
                <br />
                <input
                  type="text"
                  name="last_name"
                  value={this.state.last_name}
                  placeholder="Last Name"
                />
                <br />
                <br />
                <input
                  type="text"
                  name="email"
                  value={this.state.email}
                  placeholder="Email"
                />
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

            {/*}{this.props.users.map((element, i) =>
                this.getTemplate(element, i)
              )}{*/}
            <Users
              deleteUser={this.deleteUser}
              usersList={this.props.users}
              editUserSubmit={this.editUserSubmit}
            />
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
  getUsersDummy,
  showLoadingSpinner,
  addNewUser,
  addUser,
  deleteUser,
  updateUser
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

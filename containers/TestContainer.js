import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, showLoadingSpinner } from "../actions";

class TestContainer extends Component {
  componentDidMount() {
    this.getUsers();
  }

  componentDidUpdate() {}

  getUsers = () => {
    this.props.showLoadingSpinner();
    this.props.getUsers();
  };

  getTemplate(element) {
    return (
      <tr>
        <td>{element.first_name}</td>
        <td>{element.last_name}</td>
        <td>{element.email}</td>
        <td>Edit Delete</td>
      </tr>
    );
  }

  render() {
    return (
      <>
        <table width="100%" border="1">
          <thead>
            <tr>
              <th>first_name</th>
              <th>Last name</th>
              <th>email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.props.users.map((element, i) => this.getTemplate(element))}
          </tbody>
        </table>
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

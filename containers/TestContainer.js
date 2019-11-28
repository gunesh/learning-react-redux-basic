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

  getTemplate(element,index) {
    return (
      <tr key={index}>
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

      <div className="rmdb-home-grid">
      <br />
      <br />
      <br /><br />
      <br />
      <table width="100%" border="1">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {this.props.users.map((element, i) => this.getTemplate(element,i))}
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

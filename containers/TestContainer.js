import React, { Component } from "react";
import { connect } from "react-redux";
import { getUsers, showLoadingSpinner } from "../actions";

class TestContainer extends Component {
  state = {
    addForm: false,
    editForm: false
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
        <td>{element.first_name}</td>
        <td>{element.last_name}</td>
        <td>{element.email}</td>
        <td>
          <button> Edit </button> <button> Delete</button>
        </td>
      </tr>
    );
  }

  doAdd = event => {
    this.setState({ addForm: true });
  };
  doCancel = event => {
    this.setState({ addForm: false });
  };
  doSave = event => {
    console.log('record stored');
  };

  addFormTemplate = ()=>{
    return (
      <div>
      <input type="text" name="first_name" />
            <input type="text" name="last_name" />
            <input type="text" name="email" />
            </div>
    );
  }

  render() {
    return (
      <>
        <div className="rmdb-home-grid">
          
          <br />
          
          <br />
          {this.state.addForm ? 
            <div>
             <br />
              <input type="text"  name="first_name"  placeholder="First name"/>
               <br /><br />
              <input type="text" name="last_name" placeholder="Last name"/>
               <br /><br />
              <input type="text" name="email" placeholder="Email"/>
               <br /><br />
               <button onClick={this.doCancel}>Cancel</button> &nbsp;
               <button onClick={this.doSave}>Save</button>
            </div>
            : 
            <div><button onClick={this.doAdd}> + Add </button></div>
          }
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

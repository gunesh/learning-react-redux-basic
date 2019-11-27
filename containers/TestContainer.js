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

  render() {
    return <>Test C{this.props.users.map((element, i) => "df--")}</>;
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

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getUsers,
  showLoadingSpinner
} from '../actions';


class TestContainer extends Component {
  
  componentDidMount(){
    this.getUsers();
  }

  componentDidUpdate() {
   
  }

   getUsers = () => {
    this.props.showLoadingSpinner();
    this.props.getUsers();
  }

  render() {
    console.log(this.props);
    return (
      <>
      Test C
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.users;
}

const mapDispatchToProps = {
getUsers,
showLoadingSpinner
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

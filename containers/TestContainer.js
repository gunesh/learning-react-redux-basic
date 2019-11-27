import React, { Component } from 'react';
import { connect } from 'react-redux';
import TestPage from '../components/Test/TestPage';

class TestContainer extends Component {
  render() {
    console.log(this.props);
    return (
     <>
          dsfsf
     </>
    );
  }
}

const mapStateToProps = state => {
  return state.home;
}

const mapDispatchToProps = {
  
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TestContainer);

import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPopularMovies,
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  loadMoreMovies,
  setPopularPersistedState
} from '../actions';


class TestContainer extends Component {
  
  render() {
    return (
      <>
      Test C
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

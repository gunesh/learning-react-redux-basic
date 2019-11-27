import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getPopularMovies,
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  loadMoreMovies,
  setPopularPersistedState,
  userLogin
} from '../actions';
import Home from '../components/Home/Home';
import Login from '../components/Auth/Login';
import Header from '../components/elements/Header/Header';

class IndexContainer extends Component {
  componentDidMount(){
    this.checkUserLogin();
  }

  componentDidUpdate() {
    if (this.props.movies.length > 0) {
      if (this.props.searchTerm === "") {
        sessionStorage.setItem("HomeState", JSON.stringify(this.props));
      }
    }
  }


  checkUserLogin = () => {
    this.props.userLogin();
  }

  getMovies = () => {
    this.props.showLoadingSpinner();
    this.props.getPopularMovies();
  }

  searchMovies = searchTerm => {
    this.props.clearMovies();
    this.props.showLoadingSpinner();
    this.props.searchMovies(searchTerm);
  }

  loadMoreMovies = () => {
    const { searchTerm, currentPage } = this.props;

    this.props.showLoadingSpinner();
    this.props.loadMoreMovies(searchTerm, currentPage);
  }

  loginButton = () => {
    console.log('Login Click')
  }


  render() {
    return (<>

      <Login
        { ...this.props }
        loginButton={this.loginButton}
      />
       {/* <Header />
      <Home
        { ...this.props }
        searchMovies={this.searchMovies}
        loadMoreMovies={this.loadMoreMovies}
      /> */}
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.home;
}

const mapDispatchToProps = {
  getPopularMovies,
  showLoadingSpinner,
  searchMovies,
  clearMovies,
  loadMoreMovies,
  setPopularPersistedState,
  userLogin
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(IndexContainer);

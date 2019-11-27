import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  getAboutUs
} from '../actions';

import Header from '../components/User/Common/Header';
import Footer from '../components/User/Common/Footer';



class AboutContainer extends Component {
  componentDidMount(){
    this.getAboutUs();
  }

  componentDidUpdate() {
    
  }

  getAboutUs = () => {
    this.props.getAboutUs(429203);
  }

  
  render() {
    const {movie} = this.props;
    return (
      <>
      <Header />
       <h1>{movie.title}</h1>
       <p>{movie.tagline}</p>
      <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.about;
}

const mapDispatchToProps = {
  getAboutUs
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AboutContainer);

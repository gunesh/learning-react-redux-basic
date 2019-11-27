import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
    getBanner
} from '../actions';

import Header from '../components/User/Common/Header';
import Footer from '../components/User/Common/Footer';
import Banner from '../components/User/Common/Banner';


class UserContainer extends Component {
  componentDidMount(){
    this.getBanners();
  }

  componentDidUpdate() {
    
  }

  getBanners = () => {
    this.props.getBanner();
  }

  
  render() {
    const {banners} = this.props;
    
    return (
      <>
      <Header />
      {banners.map((banner)=>{
        return <Banner key={banner.id} {...banner}></Banner>
      })}
    <Footer />
      </>
    );
  }
}

const mapStateToProps = state => {
  return state.user;
}

const mapDispatchToProps = {
    getBanner
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserContainer);

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

  getTemplate(element){
    return (
      <div>
        <p>{element.title}</p>
        <p>{element.backdrop_path}</p>
        <p>{element.overview}</p>
        <p>{element.release_date}</p>
      </div>);
  }

  render() {
    return (
      <>
      Test C

      {this.props.users.map((element, i) => (
         this.getTemplate(element)
      ))}

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

import React, {Component} from 'react';
// import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

export const UserHome = props => {
     const {firstName} = props;

    return (
        <div>
            <h3>Welcome, {firstName} </h3>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      firstName: state.user.firstName
    };
  };
  
export default connect(mapStateToProps)(UserHome);
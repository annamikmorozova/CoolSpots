import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import { FaMapMarkerAlt } from "react-icons/fa";
import { GiThreeFriends } from "react-icons/gi";

export class Sidebar extends Component {
    render () {
        const {isLoggedIn} = this.props;
        return (
            <Navbar className="sidebar" bg="primary" variant="dark">
              { isLoggedIn ? (
              <Navbar.Brand className="navbar-text" href="./mymap"><FaMapMarkerAlt size={32} /></Navbar.Brand>) : (
              <Navbar.Brand className="navbar-text" href="./signup">Signup</Navbar.Brand>)}
              { isLoggedIn ? (
              <Navbar.Brand className="navbar-text" href="./myfriends"> <GiThreeFriends size={32} /> </Navbar.Brand>) : (
              <Navbar.Brand className="navbar-text" href="./login">Login</Navbar.Brand>)}
            </Navbar>
         )
    }
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user._id
    };
  };

export default withRouter(connect(mapState)(Sidebar));

Sidebar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};

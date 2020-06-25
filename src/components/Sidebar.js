import React, {Component} from 'react';
import {Navbar} from 'react-bootstrap';
// import {connect} from 'react-redux';

export default class Sidebar extends Component {
    render () {
        return (
            <Navbar className="sidebar" bg="primary" variant="dark">
                <Navbar.Brand className="navbar-text" href="#home">MyMap</Navbar.Brand>
                <Navbar.Brand className="navbar-text" href="#home">MyFriends</Navbar.Brand>
            </Navbar>
         )
    }
}

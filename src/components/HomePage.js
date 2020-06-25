import React, {Component} from 'react';
import {Login} from './AuthForm';
import {Signup} from './AuthForm';
// import {Navbar} from 'react-bootstrap';
// import {connect} from 'react-redux';

export default class HomePage extends Component {
    render () {
        return (
            <div>
                <Login />
                <Signup />
            </div>
         )
    }
}
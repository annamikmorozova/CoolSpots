import React, {Component} from 'react';
import {Login} from './AuthForm';
import {Signup} from './AuthForm';
import {AuthForm} from './AuthForm';
// import {Navbar} from 'react-bootstrap';
// import {connect} from 'react-redux';

export default class HomePage extends Component {
    render () {
        return (
            <div>
                Welcome to Cool Spots!
                <AuthForm />
            </div>
         )
    }
}
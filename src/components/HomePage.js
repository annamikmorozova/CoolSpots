import React, {Component} from 'react';
import { Button } from 'react-bootstrap';
import logo from "../ts-map-pin.svg"

export default class HomePage extends Component {
    render () {
        return (
            <div className="homePage-style">
                <img 
                    className="home-page-img"
                    src={logo}
                    alt="HomePage"
                />
                <div className="buttons">
                    <Button href="./login" className="button-login" variant="outline-primary">Login</Button>{' '}
                    <Button href="./signup" className="button-signup" variant="outline-primary">Signup</Button>{' '}
                </div>
            </div>
         )
    }
}
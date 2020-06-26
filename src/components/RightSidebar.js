import React, {Component} from 'react';
// import {} from 'react-bootstrap';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
// import { FaMapMarkerAlt } from "react-icons/fa";
// import { GiThreeFriends } from "react-icons/gi";

export class RightSidebar extends Component {
    render () {
        const {isLoggedIn, firstName} = this.props;
      
        return (
            <div className="rightSidebar" bg="primary" variant="dark">
              { isLoggedIn ? (
                <div className="rightbar-text" href="#">Welcome, {firstName} </div>
                ) : (
                '')}
              { isLoggedIn ? (
                <div className="rightbar-text" href="#">
                    <input type="text" className="input" placeholder="Search..." />
                        <ul>
                        ...
                        </ul>
                </div>
                ) : (
                '')}
            </div>
         )
    }
}

const mapState = state => {
    return {
      isLoggedIn: !!state.user._id,
      firstName: state.user.firstName
    };
  };

export default withRouter(connect(mapState)(RightSidebar));

RightSidebar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired
};
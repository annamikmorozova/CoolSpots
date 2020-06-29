import React, {Component} from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import PropTypes from 'prop-types';
import LocationSearchInput from './LocationSearchInput.js';
import FavSpots from './FavSpots';

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
                <div className="input-margin" href="#">
                        <LocationSearchInput />
                        <FavSpots />
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
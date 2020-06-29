import React, {Component} from "react";
import {connect} from "react-redux";
import {withRouter, Route, Switch} from "react-router-dom";
import PropTypes from "prop-types";
import HomePage from "./HomePage";
import {Login} from "./AuthForm";
import {Signup} from "./AuthForm";
import MyFriends from "./MyFriends";
import Map from "./Map";
import {me} from "../store/userReducer.js";

class Routes extends Component {
  componentDidMount() {
    this.props.loadInitialData();
  }

  render() {
    const {isLoggedIn} = this.props;

    return (
      <Switch>
        {/* available to all visitors */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
        {isLoggedIn && (
          <Switch>
            {/*after logging in */}
            <Route exact path="/myfriends" component={MyFriends} />
            <Route component={Map} />
          </Switch>
        )}
         <Route exact path="/" component={HomePage} />
        {/* Displays our Login component as a fallback */}
        <Route component={Login} />
      </Switch>
    );
  }
}

const mapState = state => {
  return {
    isLoggedIn: !!state.user._id
  };
};

const mapDispatch = dispatch => {
  return {
    loadInitialData() {
      dispatch(me());
    }
  };
};

export default withRouter(connect(mapState, mapDispatch)(Routes));

Routes.propTypes = {
  loadInitialData: PropTypes.func.isRequired,
  isLoggedIn: PropTypes.bool.isRequired
};
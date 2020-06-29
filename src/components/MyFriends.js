import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';
import {addFriendThunk} from '../store/userReducer';

class MyFriends extends Component{
  constructor() {
    super()
    // this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // handleChange(event) {
  //   this.setState({value: event.target.value});
  // }

  handleSubmit(event) {
    event.preventDefault();
    addFriendThunk(this.props.user)
  }

    render() {
      return (
          <div className="friends">
              <h3 className="friends-title">My friends</h3>
              <input
              type="text"
              className="location-search-input"
              placeholder="Search Friends ..."
              onSubmit={this.handleSubmit}
              />
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <th scope="row"><Button type="button" className="btn btn-danger">UNFRIEND</Button></th>
                    <td>@User1</td>
                  </tr>
                  <tr>
                    <th scope="row"><Button type="button" className="btn btn-danger">UNFRIEND</Button></th>
                    <td>@User2</td>
                  </tr>
                </tbody>
              </table>
          </div>
      )}
}

const mapStateToProps = state => {
    return {
      firstName: state.user.firstName,
      user: state.user.friends
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    addFriendThunk: (friend) => dispatch(addFriendThunk(friend))
  }
}
  
export default connect(mapStateToProps, mapDispatchToProps)(MyFriends);
import React, {Component} from "react";
import {Button} from "react-bootstrap";
import {connect} from "react-redux";
import {addFriendThunk} from "../store/userReducer";

class MyFriends extends Component{
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addFriendThunk(event.target.friend_username.value);
  }

    render() {
      return (
          <div className="friends">
              <h3 className="friends-title">My friends</h3>
              <form className="form-add-friends" onSubmit={this.handleSubmit} >
                <input
                type="text"
                className="location-search-input"
                placeholder="Search Friends by username ..."
                name="friend_username"
                />
                <Button type="submit" className="btn btn-primary">ADD</Button>
              </form>
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Unfriend</th>
                    <th scope="col">Username</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.friends.map(friend => (
                    <tr>
                     <th><Button type="button" className="btn btn-danger">UNFRIEND</Button></th>
                      <td>{friend.username}</td>
                    </tr>)
                    )}
                </tbody>
              </table>
          </div>
      );}
}

const mapStateToProps = state => {
    return {
      firstName: state.user.firstName,
      friends: state.user.friends
    };
  };

const mapDispatchToProps = dispatch => {
  return {
    addFriendThunk: (friend_username) => dispatch(addFriendThunk(friend_username))
  };
};
  
export default connect(mapStateToProps, mapDispatchToProps)(MyFriends);
import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import {connect} from 'react-redux';

export const MyFriends = props => {

    return (
        <div className="friends">
            <h3 className="friends-title">My friends</h3>
            <input
            type="text"
            className="location-search-input"
            placeholder="Search Friends ..."
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
                  <td>@mdo</td>
                </tr>
                <tr>
                  <th scope="row"><Button type="button" className="btn btn-danger">UNFRIEND</Button></th>
                  <td>@fat</td>
                </tr>
              </tbody>
            </table>
        </div>
    )
}

const mapStateToProps = state => {
    return {
      firstName: state.user.firstName
    };
  };
  
export default connect(mapStateToProps)(MyFriends);
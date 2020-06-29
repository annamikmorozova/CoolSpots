import React from "react";

const FriendMarker = (props) => {
    const { name } = props;
    return (
      <div>
        <div className="pinFriend bounce"
          style={{cursor: "pointer"}}
          title={name}
        />
      <div className="pulseFriend" />
      </div>
    );
  };

export default FriendMarker;
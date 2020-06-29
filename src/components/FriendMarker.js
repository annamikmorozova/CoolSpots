import React from "react";

const FriendMarker = (props) => {
    const { color, name } = props;
    return (
      <div>
        <div className="pinFriend bounce"
          style={{ backgroundColor: color, cursor: "pointer"}}
          title={name}
        />
      <div className="pulseFriend" />
      </div>
    );
  };

export default FriendMarker;
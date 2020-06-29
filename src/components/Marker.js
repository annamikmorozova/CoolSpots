import React from "react";

const Marker = (props) => {
    const {name } = props;
    return (
      <div>
        <div className="pin bounce"
          style={{ cursor: "pointer"}}
          title={name}
        />
      <div className="pulse" />
      </div>
    );
  };

  export default Marker;
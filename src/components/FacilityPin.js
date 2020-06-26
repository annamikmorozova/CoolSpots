import React from 'react'
import { GrLocation } from 'react-icons/gr'
const pinStyle={
  borderRadius: '10px',
  transform: 'matrix(-1, 0, 0, 1, 10, 0)'
}
const FacilityPin = (props) => {
    return(
      <div>
        <GrLocation className="building icon" 
          size={22}
          style={pinStyle} 
          onClick={props.onClick}
         />
      </div>
    )
}
export default FacilityPin
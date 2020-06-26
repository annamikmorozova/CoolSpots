import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
 
const AnyReactComponent = ({ text }) => 
<div style={{
    color: 'white', 
    background: 'grey',
    padding: '15px 10px',
    display: 'inline-flex',
    textAlign: 'center',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '100%',
    transform: 'translate(-50%, -50%)'
  }}>
    {text}
</div>
 
class Map extends Component {
  static defaultProps = {
    center: {
        lat: 40.73, 
        lng: -73.93 //NYC
    },
    zoom: 11 //the higher, the closer
  };
 
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ 
              key: process.env.REACT_APP_API_KEY,
              language: 'en'
             }}
          defaultCenter={Map.defaultProps.center}
          center={Map.defaultProps.center}
          defaultZoom={Map.defaultProps.zoom}
          //onChildMouseEnter={this.onChildMouseEnter}
          //onChildMouseLeave={this.onChildMouseLeave}
          distanceToMouse={()=>{}}
        >
          <AnyReactComponent
            lat={40.751820}
            lng={-73.941170}
            text="Home"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
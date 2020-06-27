import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
 
class Map extends Component {
  static defaultProps = {
    center: {
        lat: 40.73, 
        lng: -73.93 //NYC
    },
    zoom: 11 //the higher, the closer
  };

  constructor() {
    super()
    this.getMapOptions = this.getMapOptions.bind(this);
  }

  //street view, map view control
  getMapOptions = (maps) => {
    return {
      disableDefaultUI: true,
      mapTypeControl: true,
      streetViewControl: true,
      styles: [{ featureType: 'poi', elementType: 'labels', stylers: [{ visibility: 'on' }] }],
    };
  };
 
  render() {
    const { user } = this.props;
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
          options={this.getMapOptions}
          onChildMouseEnter={Map.defaultProps.onChildMouseEnter}
          onChildMouseLeave={Map.defaultProps.onChildMouseLeave}
          distanceToMouse={()=>{}}
        >
          <Marker
            lat={40.751820}
            lng={-73.941170}
            text="My marker"
          />
        </GoogleMapReact>
      </div>
    );
  }
}
 
export default Map;
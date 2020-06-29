import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Marker from './Marker';
import FriendMarker from './FriendMarker';
import {connect} from 'react-redux';
 
class Map extends Component {
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
    const { places, friends } = this.props;
   
    return (
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          center={this.props.center}
          defaultZoom={13}
          options={this.getMapOptions}
          onChildMouseEnter={this.props.onChildMouseEnter}
          onChildMouseLeave={this.props.onChildMouseLeave}
          distanceToMouse={()=>{}}
        >
          {places.map(place => {
            return (
              <Marker lat={place.lat["$numberDecimal"]} lng={place.lng["$numberDecimal"]} />
          )})}
          {friends.map(friend => {
            return friend.places.map(place => {
              return <FriendMarker lat={place.lat["$numberDecimal"]} lng={place.lng["$numberDecimal"]} />
            }) 
          })
          }
        </GoogleMapReact>
      </div>
    );
  }
}

const MapStateToProps = state => {
  return {
    places: state.user.places,
    center: state.center,
    friends: state.user.friends,
  }
}
 
export default connect(MapStateToProps)(Map);
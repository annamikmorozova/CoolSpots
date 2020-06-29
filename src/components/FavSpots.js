import React, {Component} from "react";
import {connect} from "react-redux";
import {setCenter} from "../store/centerReducer";
import {FcDeleteColumn} from "react-icons/fc";

export class FavSpots extends Component {

    render () {
        const { places } = this.props;
      
        return (
       
                <div>
                    <div className="my-cool-spots">My Cool Spots</div>
                    {places.map(place => {
                        return (
                            <div className="cool-spot-list" onClick={() => this.props.setCenter(parseFloat(place.lat["$numberDecimal"]), parseFloat(place.lng["$numberDecimal"]))} className="place-name">{place.name} <FcDeleteColumn size={32}/></div>
                        );}
                    )}
                </div>
         );
    }
}

const MapStateToProps = state => {
    return {
      places: state.user.places,
    };
  };

const MapDispatchToProps = dispatch => {
    return {
        setCenter: (lat, lng) => dispatch(setCenter(lat, lng)) 
    };
};

export default connect(MapStateToProps, MapDispatchToProps)(FavSpots);


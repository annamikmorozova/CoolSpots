import React, {Component} from "react";
import {connect} from "react-redux";
import {setCenter} from "../store/centerReducer";
import {FcDeleteColumn} from "react-icons/fc";
import {deletePlaceThunk} from "../store/userReducer"

export class FavSpots extends Component {
    // constructor() {
    //     super()
    //     this.handleSubmit = this.
    // }


    render () {
        const { places } = this.props;
      
        return (
       
                <div>
                    <div className="my-cool-spots">My Cool Spots</div>
                    {places.map(place => {
                        return (
                            <div className="cool-spot-list" onClick={() => this.props.setCenter(parseFloat(place.lat["$numberDecimal"]), parseFloat(place.lng["$numberDecimal"]))} className="place-name">{place.name} <FcDeleteColumn onClick={() => {this.props.deletePlaceThunk(place._id)}}  size={32}/></div>
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
        setCenter: (lat, lng) => dispatch(setCenter(lat, lng)),
        deletePlaceThunk: (id) => dispatch(deletePlaceThunk(id))
    }
};

export default connect(MapStateToProps, MapDispatchToProps)(FavSpots);


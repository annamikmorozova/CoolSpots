const UPDATE_CENTER = 'UPDATE_CENTER';

export const InitialCenter = {
    lat: 40.73, 
    lng: -73.93 //NYC
};

export const setCenter = (lat, lng) => ({
    type: UPDATE_CENTER,
    lat,
    lng
  });

export default function(state = InitialCenter, action) {
    switch (action.type) {
        case UPDATE_CENTER:
            return {
                lat: action.lat,
                lng: action.lng
            }
        default:
            return state;
    }
};
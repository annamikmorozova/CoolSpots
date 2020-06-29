import axios from "axios";
import history from "../history";

const UPDATE_USER = "UPDATE_USER";
const REMOVE_USER = "REMOVE_USER";

const defaultUser = {};

const updateUser = user => ({
    type: UPDATE_USER, 
    user
});

const removeUser = () => ({
    type: REMOVE_USER
});

export const me = () => async dispatch => {
  try {
    const res = await axios.get("/auth/me");
    dispatch(updateUser(res.data || defaultUser));
  } catch (err) {
    console.error(err);
  }
};

export const auth = (
  username,
  firstName,
  lastName,
  email,
  password,
  method
) => async dispatch => {
  let res;
  try {
    res = await axios.post(`/auth/${method}`, {
      username,
      firstName,
      lastName,
      email,
      password
    });
  } catch (authError) {
    return dispatch(updateUser({error: authError}));
  }

  try {
    dispatch(updateUser(res.data));
    history.push("/home");
  } catch (dispatchOrHistoryErr) {
    console.error(dispatchOrHistoryErr);
  }
};

export const logout = () => async dispatch => {
  try {
    await axios.post("/auth/logout");
    dispatch(removeUser());
    history.push("/login");
  } catch (err) {
    console.error(err);
  }
};

export const addPlaceThunk = (data) => async dispatch => {
  try {
    const response = await axios.post("/api/places", data);
    dispatch(updateUser(response.data));
  } catch(err) {
    console.log(err);
  }
};

export const addFriendThunk = (username) => async dispatch => {
  try {
    const response = await axios.put(`api/friends/${username}`);
    dispatch(updateUser(response.data));
  } catch(err) {
    console.log(err);
  }
};

export default function(state = defaultUser, action) {
  switch (action.type) {
    case UPDATE_USER:
      return action.user;
    case REMOVE_USER:
      return defaultUser;
    default:
      return state;
  }
}

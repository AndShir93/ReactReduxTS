import { Dispatch } from "react";
import { TAction, UserActionTypes } from "../../types";
import axios from "axios";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<TAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const response = await axios.get('https://jsonplaceholder.typicode.com/users');
      dispatch({ type: UserActionTypes.FETCH_USERS_SUCCESS, payload: response.data });
    } catch(e) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "Error blin!"});
    }
  }
}

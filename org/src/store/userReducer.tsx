import { UsersAction, UsersState } from "./types";

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ID = "SET_USER_ID";
export const SET_USER_NOTES = "SET_USER_NOTES";
export const SET_USER_POSITION = "SET_USER_POSITION"

const defaultState: UsersState = {
    userName: "1",
    userId: "LpAHd6skJpBVCPcJ4DVX",
    userPosition: [{
      lat: 0,
      lng: 0,
    }],
    userNotes: [],
  }
  
export const userReducer = (state = defaultState, 
  action:UsersAction): UsersState => {
    switch (action.type){
        case SET_USER_NAME:
            return{...state, userName: action.userInfo}
        case SET_USER_ID:
            return{...state, userId: action.userInfo}
        case SET_USER_NOTES:
            return{...state, userNotes: action.userInfo}
          case SET_USER_POSITION:
            return{...state, userPosition: action.userInfo}
      default:
        return state;
    }
  }
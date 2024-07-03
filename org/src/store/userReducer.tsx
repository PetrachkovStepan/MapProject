import { UsersAction, UsersState } from "./types";

export const SET_USER_NAME = "SET_USER_NAME";
export const SET_USER_ID = "SET_USER_ID";
export const SET_USER_NOTES = "SET_USER_NOTES";
export const SET_USER_POSITION = "SET_USER_POSITION"
export const SET_USER_PASSWORD = "SET_USER_PASSWORD"

const defaultState: UsersState = {
    userName: "1",
    userPassword: "1",
    userId: "LpAHd6skJpBVCPcJ4DVX",
    userPosition: [],
    userNotes: [],
  }
  
export const userReducer = (state = defaultState, 
  action:UsersAction): UsersState => {
    switch (action.type){
        case SET_USER_NAME:
            return{...state, userName: action.userInfo}
        case SET_USER_PASSWORD:
            return{...state, userPassword: action.userInfo}
        case SET_USER_ID:
            return{...state, userId: action.userInfo}
        case SET_USER_NOTES:
            return{...state, userNotes: action.userInfo}
          case SET_USER_POSITION:
            console.log(action.userInfo);
            return{...state, userPosition: action.userInfo}
      default:
        return state;
    }
  }
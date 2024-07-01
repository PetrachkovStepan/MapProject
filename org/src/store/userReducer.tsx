import { UsersAction, UsersState } from "./types";

const SET_USER_NAME = "SET_USER_NAME";
const SET_USER_ID = "SET_USER_ID";
const SET_USER_NOTES = "SET_USER_NOTES";

const defaultState: UsersState = {
    userName: "1",
    userId: "1",
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
      default:
        return state;
    }
  }
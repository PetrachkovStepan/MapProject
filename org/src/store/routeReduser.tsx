import { RouteAction, RouteState} from "./types";

export const SET_ROTE = "SET_ROTE";

const defaultState: RouteState = {
    isRoute: false
  }
  
export const routeReducer = (state = defaultState, 
  action:RouteAction): RouteState => {
    switch (action.type){
        case SET_ROTE:
            return{...state, isRoute: action.routeInfo}
      default:
        return state;
    }
  }
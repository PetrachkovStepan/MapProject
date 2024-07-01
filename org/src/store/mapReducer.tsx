import { MapItemInfo, MapItems, MapAction } from "./types";

export const SET_ITEMS = "SET_ITEMS";

const defaultState: MapItems = {
    items: [],
  }
  
export const mapReducer = (state = defaultState, 
  action:MapAction): MapItems => {
    switch (action.type){
        case SET_ITEMS:
            return{...state, items: action.items}
      default:
        return state;
    }
  }
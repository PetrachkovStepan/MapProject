import { PlaceAction, PlaceInfoItem } from "./types";
import testImg from "@assets/TestImage.png"

export const SET_PLACE = "SET_PLACE";

const defaultState: PlaceInfoItem = {
    item: {
        xid: "a",
        name: "a",
        address: {
            city: "a",
            road: "a",
            house: "a",
            suburb: "a",
            country: "a",
            postcode: "a",
            country_code: "a",
            house_number: "a",
            city_district: "a"
        },
            wikidata: "a",
            kinds: "a",
        preview: {
            source: testImg,
        },
        wikipedia_extracts: {
            title: "a",
            text: "a",
        },
        point: {
            lon: 0,
            lat: 0,
        }
    },
  }
  
export const placeReducer = (state = defaultState, 
  action:PlaceAction): PlaceInfoItem => {
    switch (action.type){
        case SET_PLACE:
            console.log("action.item");
            console.log(action.item);
            
            return{...state, item: action.item}
      default:
        return state;
    }
  }
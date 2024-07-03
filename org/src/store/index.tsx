import {combineReducers, legacy_createStore as createStore } from 'redux';
import { mapReducer } from './mapReducer';
import { userReducer } from './userReducer';
import { placeReducer } from './placeReduser';

const rootReducer = combineReducers({
    user: userReducer,
    map: mapReducer,
    place: placeReducer,
})
  
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
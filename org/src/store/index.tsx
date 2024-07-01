import {combineReducers, legacy_createStore as createStore } from 'redux';
import { mapReducer } from './mapReducer';
import { userReducer } from './userReducer';

const rootReducer = combineReducers({
    user: userReducer,
    map: mapReducer,
})
  
export const store = createStore(rootReducer)

export type RootState = ReturnType<typeof rootReducer>
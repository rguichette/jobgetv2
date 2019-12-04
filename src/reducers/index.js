import { combineReducers } from 'redux'


import {userNavReducer} from "./userNavReducer";
import {data} from './data'
import {filter} from "./filter.js";

const defaultReducer = function(state, action){
    if(state === undefined){
        return {}
    }
    return null;
}


const rootReducer = combineReducers({
    userNavReducer,
    filter,
    data
  })

  export default rootReducer
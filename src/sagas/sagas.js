import data from '../Data/data.json'

import { put } from 'redux-saga/effects'






export function* intro(){
    //make fake request to api (data folder)
    console.log("data is", data);
    
yield put({type:"GRABBED_DATA", data})


}

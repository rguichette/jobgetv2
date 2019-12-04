import { PLAY_VIDEO, playVideo, SELECT_JOB } from "../actions/userNavActions"




export function userNavReducer(state, action) {
    if(state === undefined){
        return {
            type: PLAY_VIDEO,
            opened: false
        }

        
    }
    switch (action.type) {
        case PLAY_VIDEO:
            return Object.assign({}, state, {
         
                opened:action.opened
              })


              case SELECT_JOB:
                return Object.assign({}, state, {
             
                    jobSelected:action.jobSelected
                  })
           
    
        default:
            return state
            
    }
   
     }
export function data(state={}, action) {
 
  switch (action.type) {
      case "GRABBED_DATA":
          
      return Object.assign({}, state, {
         
        jobs: action.data.jobs
      });

  
      default:
          return state
  }

  }
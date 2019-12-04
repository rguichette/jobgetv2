//handles main page actions
export const GO_TO_TOP = "GO_TO_TOP";
export const GO_TO_CAREERS = "GO_TO_CAREERS";
export const PLAY_VIDEO = "PLAY_VIDEO"

//handles opening of tabs for each job
export const SELECT_JOB = "SELECT_JOB";



export function playVideo(opened=false){
 return  {  type:PLAY_VIDEO,
  opened
  }
}

export function selectJob(jobSelected=null){
  return {
    type:SELECT_JOB,
    jobSelected
  }
}
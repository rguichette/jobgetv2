import { connect } from 'react-redux'
import JobCard from './JobCard.js'

import { selectJob} from '../../actions/userNavActions'


const mapStateToProps = (state, action) => {
  // console.log("action is... ", action);
  
    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    
    return {
      selectedJob:(job)=>{
        dispatch(selectJob(job))
      }
     
    }
  }
  
  export const MainJobCard = connect(
    mapStateToProps,
    mapDispatchToProps
  )(JobCard)
  

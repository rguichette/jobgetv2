import CareerApp from "./CareerApp.js"

import { connect } from 'react-redux'
import { selectJob} from '../../actions/userNavActions'



const mapStateToProps = state => {

    return {
  
      jobItems:state.data.jobs
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
      
      
      
    return {
      
      

    }
  }
  
  export const CareerAppContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(CareerApp)
  



export default CareerAppContainer
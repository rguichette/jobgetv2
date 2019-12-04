import Header from "./Header"

import { connect } from 'react-redux'
import { playVideo} from '../../actions/userNavActions'



const mapStateToProps = state => {

    return {
     
        videoOpened: state.userNavReducer.opened
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      playVid: hi => {
        //set action here to launch full video
       dispatch(playVideo(true))
       
      }
      

    }
  }
  
  export const HeadContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Header)
  



export default HeadContainer
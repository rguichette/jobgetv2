import VideoPlayer from "./VideoPlayer.js"

import { connect } from 'react-redux'
import { playVideo} from '../../actions/userNavActions'



const mapStateToProps = state => {

    return {
      
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      closeVidPlayer: () => {
        //set action here to launch full video
       dispatch(playVideo(false))
       
      }
      

    }
  }
  
  export const VideoPlayerContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(VideoPlayer)
  



export default VideoPlayerContainer
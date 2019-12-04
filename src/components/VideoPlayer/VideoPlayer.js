import React, { Component } from 'react'
import "./vidPlayer.css"

const exitImg = process.env.PUBLIC_URL + '/img/baseline_close_white_18dp.png';


export default class VideoPlayer extends Component {
    render() {
        return (
            <div className="videoPopUp" >
                <img id="exit_btn" onClick={this.props.closeVidPlayer} src={exitImg}/>
  
              
                <iframe width="100%" height="100%" 
                src="https://www.youtube.com/embed/zDdhnNxgjsw" 
                frameBorder="0" 
                allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                allowFullscreen
                ></iframe>






                <video width="100%" type="video/mp4" id="react_player" src={'https://www.youtube.com/watch?v=rdHZG7XbpBc'}
          autoPlay={true} muted loop={true}/>            </div>
        )
    }
}

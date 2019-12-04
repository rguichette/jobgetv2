import React, { Component } from 'react'
import VideoPlayer from "../VideoPlayer"
import "./header.css"

const dummy = process.env.PUBLIC_URL + 'img/vid_demo.png';

const jglogo = process.env.PUBLIC_URL + 'img/jobget-logo-white.png';



 class Playbtn extends Component {
    render() {
        return (
            <div className="playsvg">
                <svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="-3 -3 65 65" style={{enableBackground:"new 0 0 0 0", height:"30px",width:"30px" }} xmlSpace="preserve" >
<g>
	<path d="M45.563,29.174l-22-15c-0.307-0.208-0.703-0.231-1.031-0.058C22.205,14.289,22,14.629,22,15v30
		c0,0.371,0.205,0.711,0.533,0.884C22.679,45.962,22.84,46,23,46c0.197,0,0.394-0.059,0.563-0.174l22-15
		C45.836,30.64,46,30.331,46,30S45.836,29.36,45.563,29.174z M24,43.107V16.893L43.225,30L24,43.107z"/>
	<path d="M30,0C13.458,0,0,13.458,0,30s13.458,30,30,30s30-13.458,30-30S46.542,0,30,0z M30,58C14.561,58,2,45.439,2,30
		S14.561,2,30,2s28,12.561,28,28S45.439,58,30,58z"/>
</g>
                </svg>
            </div>
        )
    }
}




export default class Header extends Component {
    
    render() {

        
        let openVidWindow = null;

        if(this.props.videoOpened){
          console.log("done");
          openVidWindow = <VideoPlayer/>
        }
        {
            console.log("hi...",this.props.videoOpened);
            
        }
        const config = { playerVars: { showinfo: 0, controls:0, disablekb:1, fs:0, modestbranding:1, loop:1 } }

        return (
            <div>
<img src={jglogo} id="jglogo"/>
   {openVidWindow}
                <div className="header">
  <div>
        <div className="vid_btn_container">
        <div id="video_container">
            {/* 
            short clip will go here, but since the 
            video should not be in a repo, I'll 
            be using a static image as a dummy
            
            */}

<img id="dummy" src={dummy} style={{width:"100%"}}/>


          {
              //this bottom line was actually th 'local video'
              
              /* <video width="100%" type="video/mp4" id="react_player" src={process.env.PUBLIC_URL + '/video/demo_vid_test2.mp4'} 
          autoPlay={1} muted loop={true}/>
         */}
        </div>
        <div className="main_header_wrapper">
            <p id="mission_statement">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores             </p>

          
               <button className="play_video_btn" onClick={this.props.playVid}>
                   <div>
               {
            //    <img src={process.env.PUBLIC_URL + '/assets/pb1copy.svg'}/>
               }
               <Playbtn/>
               

                   <p >Watch the video</p>
                   </div>   
               </button>
               

            <div className="nav_btns">
              
<button>
    <a href="#career_postings" style={{textDecoration:"none", color:"white"}}>View all positions</a>
</button>
<button>
   <a href="http://www.jobget.com/blog" style={{textDecoration:"none", color:"white"}}> Visit our blog</a>
</button>
            </div>

            </div>
        </div>
    </div>
</div>
            </div>
        )
    }
}

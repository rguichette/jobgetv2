import React, {Component} from 'react';
import "./jobCard.css"

import {clickedObj} from '../../shared/componentDetails.js'


import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
    
  } from "react-router-dom";
import CareerApp from '../CareerApp/CareerApp';




export default class JobCard extends Component {
    


    render() {

        let jobLocation = this.props.location === "Remote" ? this.props.location : `${this.props.location.city}, ${this.props.location.state}`;
        let navTo="abc"
        
        return (
     <Link to={`/job_application/${this.props.index}`}> <div className="job_card" >
               

               <div>
                    {this.props.jobTitle}
                </div>
                <div>{jobLocation}</div>

{console.log("this" ,this.props)
}
                  
            </div></Link>
        )
    }
}












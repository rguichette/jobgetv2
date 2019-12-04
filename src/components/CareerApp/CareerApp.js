import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    Redirect
  } from "react-router-dom";

  import "./careerApp.css"
  import Footer from "../Footer"

  const jglogo = process.env.PUBLIC_URL + 'img/jobget-logo-white.png';


export default class CareerApp extends Component {
    constructor(props){
        super(props);
        console.log("this.props ", this.props);
        
    }
    render() {
        {console.log("hey, ", this);
        }
        let jobIndex=this.props.location.pathname.split("/")[2];
        let JobRequirements =null;
        let JobResponsibilities =null
console.log("jobIndex is", jobIndex);

        if(!jobIndex){
            console.log("there's nothing here");
            return <Redirect to="/"/>
        }
        if(this.props.jobItems[jobIndex].details){
            if(this.props.jobItems[jobIndex].details.responsibilities){
                JobResponsibilities = <div className="detail">
<p className="Job_detail_title">Responsibilities </p>
<p>{this.props.jobItems[jobIndex].details.responsibilities}</p>

</div>
            }
            if(this.props.jobItems[jobIndex].details.requirements){
JobRequirements= <div className="detail">

<p className="Job_detail_title">Requirements </p>
<p> {this.props.jobItems[jobIndex].details.requirements}</p>

</div>
            }
        }
        return (
            <div className="careerApp">

                <div className="job_title_space">
                <p>{this.props.jobItems[jobIndex].title}</p>
                <Link to="/"> Back to Careers</Link>
                </div>
                
               <div className="job_details job_extras">
                <div className="job_requirements">
                    {JobRequirements}
                </div>

               
                <div className="job_responsibilities">

                {JobResponsibilities}


                </div>



                </div>
            {console.log("props is ",this.props.test )}
                

<div className="application_form_container job_extras">
<div className="application_form">


Application form goes here</div>
</div>

<Footer/>

            </div>
        )
    }
}

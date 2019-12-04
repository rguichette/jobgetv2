import React, { Component } from 'react'
import JobCard from '../JobCard'
import "./jobs.css"


//whole jobs section
export default class Jobs extends Component {


    
    render() {

        let propCat = this.props.jobCategory
        console.log("filter is, ", this.props.jobCategory );
        
        var Joblist = this.props.jobList.jobs.map((job,i)=>{
            if(propCat ==="All"){
                return <JobCard key={i} index={i} category={job.category} jobTitle={job.title} location={job.location} details={job.details} onClick={(e)=>{
                    console.log("all props are ", this.props);
            
                        {console.log("item_num", e.currentTarget);
                        }
                        this.props.selectedJob(this.props.jobTitle)
                        // window.open(`job_application/:${this.props.index}`)
                 
            
                        
                        
                       }}/>


            }
            if(propCat === job.category){
                return <JobCard key={i} category={job.category} jobTitle={job.title} location={job.location} />

            }

            return null;

        })
    
        return (
            
            <div className="job_list_container" id="career_postings">
                
         <div className={"job_list_sub"}>{Joblist}</div>
            </div>
        )
    }
}

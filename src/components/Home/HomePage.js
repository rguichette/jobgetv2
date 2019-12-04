import Header from '../Header';
import Jobs from '../Jobs';
import FilterButton from '../FilterButton';


import Footer from "../Footer"

import React, { Component } from 'react'


const firstPath = process.env.PUBLIC_URL + '/img/values.jpg';
const secondPath = process.env.PUBLIC_URL + '/img/mission.jpg';
const thirdPath = process.env.PUBLIC_URL + '/img/working_at_jg.jpg';


export default class HomePage extends Component {
    render() {
        return (
            <div>
                <div className="App" >

<Header/>

<div className="jobget_outline">
  <div className="des_container">
    <img src={firstPath} className="point_img" />
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
  </div>

  <div className="des_container values ">
    <img src={secondPath}  className="point_img" />
    
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
  </div>

  <div className="des_container ">
    <img src={thirdPath} className="point_img"/>
    <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
  </div>



</div>

<Jobs/>
<Footer/>
    </div>
            </div>
        )
    }
}










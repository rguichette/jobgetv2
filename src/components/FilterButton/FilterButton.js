import React, {Component} from 'react';






export default class FilterButton extends Component {
  render() {
    
    return (
      <div>
       <button onClick={()=>{
         let filterType = this.props.children
         this.props.selectFilter(filterType)
       }}>{this.props.children}</button> 
      </div>
    )
  }
}




















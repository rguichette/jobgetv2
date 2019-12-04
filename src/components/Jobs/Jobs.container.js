import { connect } from 'react-redux'
import {filterCategory } from '../../actions/filter'
import Jobs from './Jobs'


const mapStateToProps = state => {
console.log("job cat is",state.filter.category );

    return {
      jobList: state.data,
      jobCategory: state.filter.category,
      toggled: state.data.toggled
    }
  }
  
  const mapDispatchToProps = dispatch => {
    return {
      selectFilter: category => {
       dispatch(filterCategory(category))
      }
      

    }
  }
  
  export const JobsContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(Jobs)
  
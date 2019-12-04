import React from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

import { Provider } from 'react-redux'
import configureStore from './store';
import HomePage from './components/Home/HomePage';
import CareerApp from './components/CareerApp';







function App() {


  return (
  
    <Provider store={configureStore()}>
       
      <Router>
 
{ 
  <div>
  <Route exact path="/job_application" render={(props) => (<CareerApp {...props}/>)} />

   <Route path="/job_application/:id" render={(props) => (<CareerApp {...props}/>)} />
   </div>
}


<Route exact path="/" component={HomePage} />



  </Router>
  




    </Provider>
    
  );
}

export default App;

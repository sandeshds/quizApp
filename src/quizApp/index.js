import React, { Component } from 'react';
import './quizApp.css';
import { Router, Route, browserHistory } from 'react-router';

class quizApp extends Component {	
  render() {
    return (		
    	<div>
            <Router history={browserHistory}>
                
            </Router>
	  	</div>
    );
  }
}

export default quizApp;

import React, { Component } from 'react';
import './quizApp.css';
import { Router, Route, browserHistory } from 'react-router';
import * as containers from '../containers';

class QuizApp extends Component {	
  render() {
    return (		
    	<div>
            <Router history={browserHistory}>
                <Route path="/" component={containers.Board}/>
                <Route path="/results" component={containers.Results}/>
            </Router>
	  	</div>
    );
  }
}

export default QuizApp;

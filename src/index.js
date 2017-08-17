import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import QuizApp from './quizApp'

let reducers = combineReducers({
	
});

const store = compose(
    applyMiddleware(thunk)
)(createStore)(() => {}, {});


ReactDOM.render(
    	<Provider store={store}>
			<QuizApp />
		</Provider>,
	document.getElementById('root')
);

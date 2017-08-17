import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import quizApp from './quizApp'

let reducers = combineReducers({
});

const store = compose(
    applyMiddleware(thunk)
)(createStore)(reducers, {});


ReactDOM.render(
    	<Provider store={store}>
			{<quizApp />}
		</Provider>,
	document.getElementById('root')
);

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import App from './App.js'

let reducers = combineReducers({
});

const store = compose(
    applyMiddleware(thunk)
)(createStore)(reducers, {});


ReactDOM.render(
    	<Provider store={store}>
			{<App />}
		</Provider>,
	document.getElementById('root')
);

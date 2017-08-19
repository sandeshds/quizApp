import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore, combineReducers, compose } from 'redux';
import thunk from 'redux-thunk';
import QuizApp from './quizApp';
import Quiz from './components/quiz/QuizReducer';

let reducers = combineReducers({
	Quiz
});

const store = compose(
    applyMiddleware(thunk)
)(createStore)(reducers, {});


ReactDOM.render(
    	<Provider store={store}>
			<QuizApp />
		</Provider>,
	document.getElementById('root')
);

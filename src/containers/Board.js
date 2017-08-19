import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Quiz from '../components/quiz';
import QuizAction from '../components/quiz/QuizAction';

class Board extends Component {
    render() {
        return (
            <Quiz {...this.props}/>
        )
    }
}

Board.propTypes = {
    fetchQuestions : PropTypes.func,
    showFetchingQuestionsSpinner : PropTypes.bool,
    allQuestions : PropTypes.array,
    displayResults : PropTypes.func
}

function mapStateToProps(state) {
    return {
        showFetchingQuestionsSpinner: state.Quiz.showFetchingQuestionsSpinner,
        allQuestions: state.Quiz.allQuestions,
    }
}

function mapDispatchToProps(dispatch) {
    return {
        fetchQuestions: () => {
            dispatch(QuizAction.fetchQuestions(dispatch));
        },
        displayResults: (answers) => {
            dispatch(QuizAction.displayResults(dispatch, answers));
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board)
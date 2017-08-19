import {browserHistory} from 'react-router';

let initialState = {
    showFetchingQuestionsSpinner : true,
    allQuestions : [],
    questionToDisplay : 0,
    results : 0
}

export default function QuizReducer(state = initialState, action) {
    let newState = Object.assign({}, state)
    switch (action.type) {
        case 'QUESTIONS_FETCHED':
            newState.allQuestions = action.questions;
            newState.showFetchingQuestionsSpinner = false;
            break;
        case 'DISPLAY_RESULTS':
            newState.results = action.results;
            browserHistory.push('/results');
            break;
        default:
            break;
    }
    return newState
}
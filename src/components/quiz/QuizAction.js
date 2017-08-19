import * as Urls from '../../config/Url';
import filter from 'lodash/filter';

export default {
    fetchQuestions : (dispatch) => {
        return dispatch => {
            return fetch(Urls.QuestionsListURL, {
                method: 'GET',
            }).then((response) => {
                return response.json();
            }).then((jsonResponse) => {
                return dispatch({type: 'QUESTIONS_FETCHED', questions: jsonResponse});
            })
        }
    },
    displayResults : (dispatch, answers) => {
        return dispatch => {
            var results = {
                totalNumberOfQuestions : answers.length,
                questionsAnsweredCorrectly : filter(answers, (answer) => answer.answeredCorrectly === true ).length,
                percentageScored : 0
            };
            results.percentageScored = (results.questionsAnsweredCorrectly/results.totalNumberOfQuestions) * 100;
            return dispatch({type: 'DISPLAY_RESULTS', results: results});
        }
    }
}
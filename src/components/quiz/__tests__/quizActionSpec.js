import QuizAction from '../QuizAction';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';
import * as Url from '../../../config/Url';


const middlewares = [ thunk ]
const mockStore = configureMockStore(middlewares)


describe('Quiz Actions', () => {
    it('should fetch questions and dispatch appropriate actions', () => {
        let questions = [{
            "text": "This is the first question",
            "options": ["answer1","answer2","answer3","answer4"],
            "answer": 2
        },{
            "text": "This is the second question",
            "options": ["answer 1","answer 2","answer 3", "answer 4"],
            "answer": 1
        }];
        
        fetchMock.get(Url.QuestionsListURL, questions);
        const store = mockStore({ 
            questions: [],
            showFetchingQuestionsSpinner: true 
        });
        const expectedActions = [{"questions": questions, "type": "QUESTIONS_FETCHED"}];

        return store.dispatch(QuizAction.fetchQuestions())
        .then(() => {
            expect(store.getActions()).toEqual(expectedActions)
        });
    });

    it('should calculate and display results', () => {
        let answers = [{
            answeredCorrectly : true,
            questionAnswered : 0
        }, {
            answeredCorrectly : false,
            questionAnswered : 1
        }];

        const store = mockStore({ 
            questions: [],
            showFetchingQuestionsSpinner: true 
        });

        const expectedActions = [{"results" : {
            totalNumberOfQuestions : 2,
            questionsAnsweredCorrectly : 1,
            percentageScored : 50
        }, "type" : "DISPLAY_RESULTS"}];

        store.dispatch(QuizAction.displayResults(null, answers))
        expect(store.getActions()).toEqual(expectedActions);
    });
});
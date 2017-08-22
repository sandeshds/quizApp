import QuizReducer from '../QuizReducer'

describe('Ticket Requirements reducer', () => {
    it('should return the stations', () => {
        let QuizState = QuizReducer(undefined, {})
        expect(QuizState.showFetchingQuestionsSpinner).toBeTruthy()
        expect(QuizState.allQuestions).toEqual([])
        

        let QuizState2 = QuizReducer(QuizState, {
            type: 'QUESTIONS_FETCHED', questions: ["abcc"]
        })
        expect(QuizState2.showFetchingQuestionsSpinner).toBeFalsy();
        expect(QuizState2.allQuestions).toEqual(["abcc"]);
    });
});
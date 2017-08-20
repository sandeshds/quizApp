import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import Quiz from './../index';
import { shallow } from 'enzyme';

describe('Button', ()=>{
    it('should render the entire quiz properly', ()=>{
        let questions = [{
            "text": "This is the first question",
            "options": ["answer1","answer2","answer3","answer4"],
            "answer": 2
        },{
            "text": "This is the second question",
            "options": ["answer 1","answer 2","answer 3", "answer 4"],
            "answer": 1
        }];

        let tree = renderer.create(
            <Quiz 
                allQuestions = {questions}
                fetchQuestions = {() => {}}
                showFetchingQuestionsSpinner = {false}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should render fetching questions text properly', ()=>{
        let tree = renderer.create(
            <Quiz 
                allQuestions = {[]}
                fetchQuestions = {() => {}}
                showFetchingQuestionsSpinner = {true}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should initialise state and get the next question', () => {
        let questions = [{
            "text": "This is the first question",
            "options": ["answer1","answer2","answer3","answer4"],
            "answer": 2
        },{
            "text": "This is the second question",
            "options": ["answer 1","answer 2","answer 3", "answer 4"],
            "answer": 1
        }];
        let props = {
            showFetchingQuestionsSpinner: false,
            fetchQuestions: () => {},
            allQuestions : questions,
            displayResults : () => {}
        }
        const wrapper = shallow(<Quiz {...props}/>);
        wrapper.instance().updateStateAndGetNextQuestion(2);
                
        expect(wrapper.instance().state.answers[0].questionAnswered).toEqual(0);
        expect(wrapper.instance().state.answers[0].answeredCorrectly).toEqual(true);

        // wrapper.instance().updateStateAndGetNextQuestion(3);
        // expect(wrapper.instance().state.answers[1].questionAnswered).toEqual(1);
        // expect(wrapper.instance().state.answers[1].answeredCorrectly).toEqual(false);
    })
});
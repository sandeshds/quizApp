import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import Quiz from './../index';

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
});
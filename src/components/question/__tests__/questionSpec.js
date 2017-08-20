import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import Question from './../index';

describe('Button', ()=>{
    it('should render question properly', ()=>{
        let questions = [{
            "text": "This is the first question",
            "options": ["answer1","answer2","answer3","answer4"],
            "answer": 2
        }];
        let tree = renderer.create(
            <Question 
                allQuestions = {questions}
                questionToDisplay = {0}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
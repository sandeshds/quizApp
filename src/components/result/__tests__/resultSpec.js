import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import Result from './../index';

describe('Button', ()=>{
    it('should render result properly', ()=>{
        let results = {
            totalNumberOfQuestions : 8,
            questionsAnsweredCorrectly : 2,
            percentageScored : 25
        };
        let tree = renderer.create(
            <Result 
                results = {results}
            />
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
import React, {Component} from 'react';
import renderer from 'react-test-renderer';
import Options from './../index';

describe('Options', ()=>{
    it('should render options properly', ()=>{
        let tree = renderer.create(
            <Options onSelectingAnswer={() => {}}/>
        ).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
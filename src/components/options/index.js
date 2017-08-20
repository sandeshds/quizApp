import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Options.css';

const propTypes = {
    onSelectingAnswer : PropTypes.func.isRequired
}

class Question extends PureComponent {
    getOptions() {
        let optionsMap = {
            'A' : 0,
            'B' : 1,
            'C' : 2,
            'D' : 3,
        };
        return map(optionsMap, (option, index) => {
            return  <input
                    key = {index}
                    className="button"
                    type="button"
                    value={index}
                    onClick={() => this.props.onSelectingAnswer(optionsMap[index])} />
        });
    };

    render() {
        return (
            <div className='optionsBlock'>
                 {this.getOptions()}
            </div>
        );
    }
}

Question.propTypes = propTypes;

export default Question;
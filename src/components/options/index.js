import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

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
                    type="button"
                    value={index}
                    onClick={() => this.props.onSelectingAnswer(optionsMap[index])} />
        });
    };

    render() {
        return (
            <div>
                 {this.getOptions()}
            </div>
        );
    }
}

Question.propTypes = propTypes;

export default Question;
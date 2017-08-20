import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';
import './Question.css';

const propTypes = {
    allQuestions: PropTypes.array.isRequired,
    questionToDisplay: PropTypes.number.isRequired,
}

class Question extends PureComponent {
    getOptions() {
        let optionsMap = {
            0 : 'A',
            1 : 'B',
            2 : 'C',
            3 : 'D'
        };
        return map(this.props.allQuestions[this.props.questionToDisplay].options, (option, index) => {
            return  <div className='option'>
                        <div>{optionsMap[index]} - {option}</div>
                    </div>;
        });
    };

    render() {
        return (
            <div className='questionBlock'>
                <div>
                    <span className='questionCounter'>Javascript Quiz {this.props.questionToDisplay + 1} of {this.props.allQuestions.length} </span><br/>
                    <span className='question'>{this.props.allQuestions[this.props.questionToDisplay].text}</span>
                </div>
                <div className='optionBlock'>
                    {this.getOptions()}
                </div>
            </div>
        );
    }
}

Question.propTypes = propTypes;

export default Question;
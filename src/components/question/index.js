import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import map from 'lodash/map';

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
            return  <div>
                        <div>{optionsMap[index]} - {option}</div> <br/>
                    </div>;
        });
    };

    render() {
        return (
            <div>
                <div>
                    <h3>Javascript Quiz {this.props.questionToDisplay + 1} of {this.props.allQuestions.length} </h3>
                    <h4>{this.props.allQuestions[this.props.questionToDisplay].text}</h4>
                </div>
                <div>
                    {this.getOptions()}
                </div>
            </div>
        );
    }
}

Question.propTypes = propTypes;

export default Question;
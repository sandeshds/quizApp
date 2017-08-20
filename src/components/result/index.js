import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import './Result.css';
import {browserHistory} from 'react-router';

const propTypes = {
    results: PropTypes.object.isRequired,
}
// You have answered {this.props.results.questionsAnsweredCorrectly} questions 
//                 correctly out of {this.props.results.totalNumberOfQuestions}.
class Result extends PureComponent {
    render() {
        return (
            <div className="resultsBlock">
                <h2> Results </h2>
                <table>
                    <tr>
                        <td>
                            Total No of questions
                        </td>
                        <td>
                            {this.props.results.totalNumberOfQuestions}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            No of questions answered correctly
                        </td>
                        <td>
                            {this.props.results.questionsAnsweredCorrectly}
                        </td>
                    </tr>
                    <tr>
                        <td>
                            Percentage Scored
                        </td>
                        <td>
                            {this.props.results.percentageScored} %
                        </td>
                    </tr>
                </table>
                <input
                    className="buttonRetake"
                    type="button"
                    value="Retake Quiz"
                    onClick={() => browserHistory.push('/')} />
            </div>
        );
    }
}

Result.propTypes = propTypes;

export default Result;
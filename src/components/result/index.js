import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

const propTypes = {
    results: PropTypes.object.isRequired,
}

class Result extends PureComponent {
    render() {
        return (
            <div>
                You have answered {this.props.results.questionsAnsweredCorrectly} questions 
                correctly out of {this.props.results.totalNumberOfQuestions}.
            </div>
        );
    }
}

Result.propTypes = propTypes;

export default Result;
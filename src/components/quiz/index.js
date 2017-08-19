import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Question from './../question';
import Options from './../options';
import cloneDeep from 'lodash/cloneDeep';

class Quiz extends Component {
    constructor(props) {
        super(props);
        this.updateStateAndGetNextQuestion = this.updateStateAndGetNextQuestion.bind(this);
        this.state = {
            answers : [],
            questionToDisplay : 0
        }
    }

    componentDidMount(){
        this.props.fetchQuestions();
    }

    updateStateAndGetNextQuestion(answer) {
        var questionToDisplay = this.state.questionToDisplay;
        var answeredQuestionCorrectly = this.props.allQuestions[questionToDisplay].answer === answer; 
        const newState = cloneDeep(this.state);
        newState.answers.push({
            questionAnswered : questionToDisplay,
            answeredCorrectly : answeredQuestionCorrectly
        });
        newState.questionToDisplay += 1;
        if(newState.questionToDisplay === this.props.allQuestions.length)
            this.props.displayResults(newState.answers);
        else
            this.setState({...newState});
    }

    render() {
        return (
            <div>
               {this.props.showFetchingQuestionsSpinner ? <h2>waiting</h2> : 
               <div>
                    <Question
                        allQuestions = {this.props.allQuestions}
                        questionToDisplay = {this.state.questionToDisplay}
                    />
                    <Options
                        onSelectingAnswer = {this.updateStateAndGetNextQuestion}
                    />
                </div>
               }
            </div>
        )
    }
}

Quiz.propTypes = Object.assign({}, Component.propTypes, {
    fetchStations: PropTypes.func,
    showFetchingQuestionsSpinner: PropTypes.bool
});

export default Quiz
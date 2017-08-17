import React, { Component } from 'react';
import { connect } from 'react-redux';
import Questions from '../components/questions'

class QuestionsPage extends Component {
    render() {
        return (
            <Questions />
        )
    }
}

QuestionsPage.propTypes = {
    
}

function mapStateToProps(state) {
    return {
        
    }
}

function mapDispatchToProps(dispatch) {
    return {
        
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsPage)
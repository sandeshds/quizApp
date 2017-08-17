import React, { Component } from 'react';
import { connect } from 'react-redux';

class QuestionsPage extends Component {
    render() {
        return (
            <h2>hello </h2>
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
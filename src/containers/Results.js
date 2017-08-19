import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Result from './../components/result'

class Results extends Component {
    render() {
        return (
            <Result {...this.props}/>
        )
    }
}

Results.propTypes = {
    results : PropTypes.object
}

function mapStateToProps(state) {
    return {
        results : state.Quiz.results
    }
}

function mapDispatchToProps(dispatch) {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Results)
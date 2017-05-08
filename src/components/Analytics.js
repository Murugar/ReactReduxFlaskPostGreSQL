import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actionCreators from '../actions/auth';

function mapStateToProps(state) {
    return {
        isRegistering: state.auth.isRegistering,
        registerStatusText: state.auth.registerStatusText,
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actionCreators, dispatch);
}

@connect(mapStateToProps, mapDispatchToProps)
class Analytics extends React.Component { // eslint-disable-line react/prefer-stateless-function
    render() {
        return (
            <div className="col-md-8">
            <div className="panel panel-primary">
            <div className="panel-heading">Greetings From Python Flask React Redux</div>
            <div className="panel-body text-primary">
                <h1 className="text-info">Analytics</h1>
                <hr />
                </div>
                </div>    
            </div>
        );
    }
}

export default Analytics;

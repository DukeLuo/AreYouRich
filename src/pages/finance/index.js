/* eslint-disable prefer-destructuring */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Menu from '../../components/Menu';
import Dashboard from '../../components/Dashboard';
import {
    getEmergencyLevel,
    getInterestLevel,
    getSavingLevel,
    clearDispaly,
} from '../../redux/finance/action';
import InputField from '../../components/InputField';
import inputFieldConfig from './inputFieldConfig';
import * as financePaths from './path';
import './index.scss';

export class FinanceDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.loadConfigByMatchedPath = this.loadConfigByMatchedPath.bind(this);
        this.getEmergencyHandler = this.getEmergencyHandler.bind(this);
        this.getInterestHandler = this.getInterestHandler.bind(this);
        this.getSavingHandler = this.getSavingHandler.bind(this);
        this.inputFieldClickHandler = this.inputFieldClickHandler.bind(this);
    }

    inputChangeHandler(input, index) {
        this.setState({
            [index]: input,
        });
    }

    getEmergencyHandler() {
        const fieldValues = Object.values(this.state);

        this.props.getEmergencyLevel(fieldValues[0], fieldValues[1]);
    }

    getInterestHandler() {
        const fieldValues = Object.values(this.state);

        this.props.getInterestLevel(fieldValues[0], fieldValues[1]);
    }

    getSavingHandler() {
        const fieldValues = Object.values(this.state);

        this.props.getSavingLevel(fieldValues[0], fieldValues[1]);
    }

    inputFieldClickHandler() {
        const matchedPath = this.props.match.path;

        if (matchedPath === financePaths.EMERGENCY_PATH) {
            return this.getEmergencyHandler();
        } else if (matchedPath === financePaths.INTERNET_PATH) {
            return this.getInterestHandler();
        } else if (matchedPath === financePaths.SAVING_PATH) {
            return this.getSavingHandler();
        }
        return null;
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.path !== this.props.match.path) {
            Object.keys(this.state || {}).forEach((key) =>
                this.setState({ [key]: '' })
            );
            this.props.clearDispaly();
        }
    }

    loadConfigByMatchedPath() {
        return inputFieldConfig[this.props.match.path];
    }

    render() {
        const DisplayLevel = (props) =>
            props.isGetLevelSuccess ? (
                <section className="display-level">
                    <Dashboard score={props.level < 0 ? 0 : props.level} />
                    <h2>{props.description}</h2>
                </section>
            ) : (
                <section className="error-message">
                    <h2>{props.errorMessage}</h2>
                </section>
            );

        return (
            <div className="finance-detail">
                <Menu />
                <section className="content">
                    {this.props.description ? (
                        <DisplayLevel
                            level={this.props.level}
                            description={this.props.description}
                            isGetLevelSuccess={this.props.isGetLevelSuccess}
                            errorMessage={this.props.errorMessage}
                        />
                    ) : (
                        <section className="input-form">
                            <InputField
                                values={this.state}
                                config={this.loadConfigByMatchedPath()}
                                onChange={this.inputChangeHandler}
                                onClick={this.inputFieldClickHandler}
                            />
                        </section>
                    )}
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    level: state.financeReducer.level,
    description: state.financeReducer.description,
    isGetLevelSuccess: state.financeReducer.isGetLevelSuccess,
    errorMessage: state.financeReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getEmergencyLevel,
            getInterestLevel,
            getSavingLevel,
            clearDispaly,
        },
        dispatch
    );

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withRouter(FinanceDetail));

import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Menu from '../../components/Menu';
import InputField from '../../components/InputField';
import inputFieldConfig from './inputFieldConfig';
import './index.scss';

export class FinanceDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
        this.loadConfigByMatchedPath = this.loadConfigByMatchedPath.bind(this);
    }

    inputChangeHandler(input, index) {
        this.setState({
            [index]: input,
        });
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.path !== this.props.match.path) {
            Object.keys(this.state || {}).forEach((key) =>
                this.setState({ [key]: '' })
            );
        }
    }

    loadConfigByMatchedPath() {
        return inputFieldConfig[this.props.match.path];
    }

    render() {
        return (
            <div className="finance-detail">
                <Menu />
                <section className="content">
                    <section className="input-form">
                        <InputField
                            values={this.state}
                            config={this.loadConfigByMatchedPath()}
                            onChange={this.inputChangeHandler}
                        />
                    </section>
                </section>
            </div>
        );
    }
}

export default withRouter(FinanceDetail);

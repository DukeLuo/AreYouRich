import React, { Component } from 'react';
import Menu from '../../components/Menu';
import InputField from '../../components/InputField';
import './index.scss';

export class FinanceDetail extends Component {
    constructor(props, context) {
        super(props, context);
        this.inputChangeHandler = this.inputChangeHandler.bind(this);
    }

    inputChangeHandler(input, index) {
        this.setState({
            [index]: input,
        });
    }

    componentWillReceiveProps(props) {
        if (props.resetField) {
            Object.keys(this.state).forEach((key) =>
                this.setState({ [key]: '' })
            );
        }
    }

    render() {
        return (
            <div className="finance-detail">
                <Menu />
                <section className="content">
                    <section className="input-form">
                        <InputField
                            values={this.state}
                            config={this.props.inputFields}
                            onChange={this.inputChangeHandler}
                        />
                    </section>
                </section>
            </div>
        );
    }
}

export default FinanceDetail;

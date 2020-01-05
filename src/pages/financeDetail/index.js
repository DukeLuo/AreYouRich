import React, { Component } from 'react';
import Menu from '../../components/Menu';
import InputField from '../../components/InputField';
import './index.scss';

export class FinanceDetail extends Component {
    render() {
        return (
            <div className="finance-detail">
                <Menu />
                <section className="content">
                    <InputField config={this.props.inputFields} />
                </section>
            </div>
        );
    }
}

export default FinanceDetail;

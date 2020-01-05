import React, { Component } from 'react';
import './index.scss';

export class InputField extends Component {
    render() {
        // eslint-disable-next-line prefer-destructuring
        const { config } = this.props;
        const inputFields = config.map((item, index) => (
            <div className="field" key={index}>
                <label htmlFor={item.id}>
                    {item.description && `${item.description}`}
                </label>
                <input
                    type={item.type}
                    id={item.id}
                    name={item.id}
                    required
                    {...item.options}
                />
            </div>
        ));

        return (
            <div className="input-field" data-testid="input-field">
                {inputFields}
            </div>
        );
    }
}

export default InputField;

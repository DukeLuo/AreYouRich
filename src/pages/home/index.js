/* eslint-disable no-undefined */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputField from '../../components/InputField';
import { getPoem } from '../../redux/poem/action';
import { register, clearError } from '../../redux/user/action';
import './index.scss';

export class Home extends Component {
    componentDidMount() {
        this.props.getPoem();
    }

    render() {
        const inputConfig = [
            {
                type: 'text',
                id: 'input-field-1',
                description: '用户名',
                options: {
                    onChange: () =>
                        this.setState({ username: event.target.value }),
                },
            },
            {
                type: 'text',
                id: 'input-field-2',
                description: '密码',
                options: {
                    onChange: () =>
                        this.setState({ password: event.target.value }),
                },
            },
            {
                type: 'button',
                id: 'register-btn',
                options: {
                    value: '注册',
                    onClick: () =>
                        this.props.register(
                            this.state.username,
                            this.state.password
                        ),
                },
            },
            {
                type: 'button',
                id: 'login-btn',
                options: {
                    value: '登录',
                },
            },
        ];

        if (
            this.props.isRegisteredSuccess !== undefined &&
            !this.props.isRegisteredSuccess
        ) {
            alert(this.props.errorMessage);
            this.props.clearError();
        }

        return (
            <div className="Home" data-testid="home">
                <InputField config={inputConfig} />
                <section className="content">
                    <h2 className="poem">{this.props.poem}</h2>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    poem: state.poemReducer.poem,
    isRegisteredSuccess: state.userReducer.isRegisteredSuccess,
    errorMessage: state.userReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getPoem,
            register,
            clearError,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

/* eslint-disable no-undefined */
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputField from '../../components/InputField';
import { getPoem } from '../../redux/poem/action';
import { register, login, clearError } from '../../redux/user/action';
import './index.scss';

export class Home extends Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            username: '',
            password: '',
        };
        this.alert = this.alert.bind(this);
    }

    alert(signal) {
        if (signal !== undefined && !signal) {
            alert(this.props.errorMessage);
            this.props.clearError();
        }
    }

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
                    value: this.state.username,
                    onChange: () =>
                        this.setState({ username: event.target.value }),
                },
            },
            {
                type: 'password',
                id: 'input-field-2',
                description: '密码',
                options: {
                    value: this.state.password,
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
                    onClick: () =>
                        this.props.login(
                            this.state.username,
                            this.state.password
                        ),
                },
            },
        ];

        this.alert(this.props.isRegisteredSuccess);
        this.alert(this.props.isLoggedInSuccess);

        if (this.props.isRegisteredSuccess || this.props.isLoggedInSuccess) {
            this.props.history.push('/emergency');
        }

        return (
            <div className="Home" data-testid="home">
                <section className="content">
                    <h2 className="poem">{this.props.poem}</h2>
                    <section className="input-form">
                        <InputField config={inputConfig} />
                    </section>
                </section>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    poem: state.poemReducer.poem,
    isRegisteredSuccess: state.userReducer.isRegisteredSuccess,
    isLoggedInSuccess: state.userReducer.isLoggedInSuccess,
    errorMessage: state.userReducer.errorMessage,
});

const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        {
            getPoem,
            register,
            login,
            clearError,
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

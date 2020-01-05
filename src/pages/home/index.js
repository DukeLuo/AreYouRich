import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import InputField from '../../components/InputField';
import { getPoem } from '../../redux/poem/action';
import { register } from '../../redux/user/action';
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
                onChange: () => this.setState({ username: event.target.value }),
            },
            {
                type: 'text',
                id: 'input-field-2',
                description: '密码',
                onChange: () => this.setState({ password: event.target.value }),
            },
            {
                type: 'button',
                id: 'register-btn',
                value: '注册',
                onClick: () =>
                    this.props.register(
                        this.state.username,
                        this.state.password
                    ),
            },
            {
                type: 'button',
                id: 'login-btn',
                value: '登录',
            },
        ];

        if (
            // eslint-disable-next-line no-undefined
            this.props.isRegisteredSuccess !== undefined &&
            !this.props.isRegisteredSuccess
        ) {
            alert(this.props.errorMessage);
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
        },
        dispatch
    );

export default connect(mapStateToProps, mapDispatchToProps)(Home);

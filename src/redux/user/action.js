import { createAction } from 'redux-actions';
import {
    USER_LOGIN,
    USER_LOGIN_ERROR,
    USER_REGISTER,
    USER_REGISTER_ERROR,
    CLEAR_ERROR,
} from './type';
import * as apis from '../../api';

const registerResponse = createAction(
    USER_REGISTER,
    (response) => response,
    () => ({ isRegisteredSuccess: true })
);
const registerError = createAction(
    USER_REGISTER_ERROR,
    (error) => new Error(error),
    () => ({ isRegisteredSuccess: false })
);

const register = (username, password) => (dispatch) =>
    apis.userRegister(username, password).then(
        (response) => dispatch(registerResponse(response)),
        (error) => dispatch(registerError(error))
    );

const clearError = createAction(CLEAR_ERROR);

const loginResponse = createAction(
    USER_LOGIN,
    (response) => response,
    () => ({ isLoggedInSuccess: true })
);
const loginError = createAction(
    USER_LOGIN_ERROR,
    (error) => new Error(error),
    () => ({ isLoggedInSuccess: false })
);

const login = (username, password) => (dispatch) =>
    apis.userLogin(username, password).then(
        (response) => dispatch(loginResponse(response)),
        (error) => dispatch(loginError(error))
    );

export { register, clearError, login };

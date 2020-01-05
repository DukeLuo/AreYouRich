import { createAction } from 'redux-actions';
import { USER_LOGIN, USER_REGISTER, USER_REGISTER_ERROR } from './type';
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

export { register };

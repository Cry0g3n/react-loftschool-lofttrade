import {createActions} from 'redux-actions';

export const {
    loginRequest,
    loginSuccess,
    loginReject,
    registrationRequest,
    registrationReject,
    logout
} = createActions(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_REJECT',
    'REGISTRATION_REQUEST',
    'REGISTRATION_REJECT',
    'LOGOUT'
);
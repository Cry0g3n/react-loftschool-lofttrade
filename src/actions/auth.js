import {createAction, createActions} from 'redux-actions';

export const {
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure
} = createActions(
    'LOGIN_REQUEST',
    'LOGIN_SUCCESS',
    'LOGIN_FAILURE',
    'REGISTRATION_REQUEST',
    'REGISTRATION_SUCCESS',
    'REGISTRATION_FAILURE'
);
export const logout = createAction("LOGOUT");
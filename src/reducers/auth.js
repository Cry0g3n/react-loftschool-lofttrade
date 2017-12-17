import {handleActions} from 'redux-actions';

import {
    fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess, fetchRegistrationFailure, fetchRegistrationRequest,
    logout
} from "../actions/auth";

const initialState = {
    isAuthorized: false,
    loginError: null,
    registrationError: null
};

export default handleActions({
    [fetchLoginRequest]: (state, action) => ({
        ...initialState
    }),
    [fetchLoginSuccess]: (state, action) => ({
        ...initialState,
        isAuthorized: true
    }),
    [fetchLoginFailure]: (state, action) => ({
        ...initialState,
        loginError: action.payload
    }),
    [fetchRegistrationRequest]: (state, action) => ({
        ...initialState
    }),
    [fetchRegistrationFailure]: (state, action) => ({
        ...state,
        registrationError: action.payload
    }),
    [logout]: (state, action) => ({
        ...initialState
    })
}, initialState);

export const getIsAuthorized = state => state.auth.isAuthorized;
export const getIsLoginError = state => state.auth.loginError;
export const getIsRegistrationError = state => state.auth.registrationError;
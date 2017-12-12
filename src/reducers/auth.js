import {handleActions} from 'redux-actions';
import {combineReducers} from 'redux'

import {
    loginRequest,
    loginReject,
    loginSuccess,
    registrationRequest,
    registrationReject,
    logout
} from '../actions/auth';

export const isFetching = handleActions({
        [loginRequest]: () => true,
        [loginSuccess]: () => false,
        [loginReject]: () => false,
        [registrationRequest]: () => true,
        [registrationReject]: () => false,
        [logout]: () => false,
    },
    false
);

export const isFetched = handleActions({
        [loginRequest]: () => false,
        [loginSuccess]: () => true,
        [loginReject]: () => true,
        [registrationRequest]: () => false,
        [registrationReject]: () => true,
        [logout]: () => false,
    },
    false
);

export const token = handleActions({
        [loginRequest]: () => null,
        [loginSuccess]: (state, action) => action.payload,
        [loginReject]: () => null,
        [registrationRequest]: () => null,
        [registrationReject]: () => null,
        [logout]: () => null,
    },
    null
);

export const error = handleActions({
        [loginRequest]: () => null,
        [loginSuccess]: () => null,
        [loginReject]: (state, action) => action.payload,
        [registrationRequest]: () => null,
        [registrationReject]: (state, action) => action.payload,
        [logout]: () => null,
    },
    null
);

export default combineReducers({
    isFetching,
    isFetched,
    token,
    error
});

export const getIsAuthorized = state => !!state.auth.token;
export const getError = state => {
    const {error} = state.auth;

    if (error) {
        if (error.data && error.data.message) {
            return error.data.message;
        }

        return 'Network error';
    }

    return null;
};
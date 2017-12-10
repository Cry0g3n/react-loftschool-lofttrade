import {
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationFailure
} from "../actions/auth";
import {handleActions} from "redux-actions";
import {combineReducers} from "redux";

const initialState = null;
export const isAuthorized = handleActions(
    {
        [loginRequest]: () => false,
        [loginSuccess]: () => true,
        [loginFailure]: () => false,
        [registrationRequest]: () => false,
        [registrationFailure]: () => false
    },
    false
);

export const loginError = handleActions(
    {
        [loginRequest]: () => initialState,
        [loginSuccess]: () => initialState,
        [loginFailure]: (state, action) => action.payload,
        [registrationRequest]: () => initialState,
        [registrationFailure]: () => initialState
    },
    initialState
);

export const regError = handleActions(
    {
        [loginRequest]: () => initialState,
        [loginSuccess]: () => initialState,
        [loginFailure]: () => initialState,
        [registrationRequest]: () => initialState,
        [registrationFailure]: (state, action) => action.payload
    },
    initialState
);

export default combineReducers({
    isAuthorized,
    loginError,
    regError
});
export const getIsAuthorized = state => state.auth.isAuthorized;
export const getLoginError = state => state.auth.loginError;
export const getRegistrationError = state => state.auth.regError;

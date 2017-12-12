import {call, take, select, put} from 'redux-saga/effects';

import {
    loginRequest,
    loginReject,
    loginSuccess,
    registrationRequest,
    registrationReject,
    logout
} from '../actions/auth';
import {getIsAuthorized} from '../reducers/auth';
import {
    getTokenFromLocalStorage,
    setTokenToLocalStorage,
    removeTokenFromLocalStorage
} from '../localstorage';
import {login, registration, clearTokenApi, setTokenApi} from '../api';

export default function* () {
    while (true) {
        const isAuthorized = yield select(getIsAuthorized);
        const localStorageToken = yield call(getTokenFromLocalStorage);
        let token;

        if (!isAuthorized) {
            if (localStorageToken) {
                token = localStorageToken;

                yield put(loginSuccess(token));
            } else {
                const action = yield take([loginRequest, registrationRequest]);

                if (action.type === registrationRequest.toString()) {
                    // Registration
                    try {
                        const response = yield call(registration, action.payload);
                        token = response.data.jwt;

                        yield put(loginSuccess(token));
                    } catch (error) {
                        yield put(registrationReject(error));
                    }
                } else if (action.type === loginRequest.toString()) {
                    // Login
                    try {
                        const response = yield call(login, action.payload);
                        token = response.data.jwt;

                        yield put(loginSuccess(token));
                    } catch (error) {
                        yield put(loginReject(error));
                    }
                }
            }
        }

        if (token) {
            yield call(setTokenApi, token);
            yield call(setTokenToLocalStorage, token);
            yield take(logout);
            yield call(removeTokenFromLocalStorage);
            yield call(clearTokenApi);
        }
    }
}
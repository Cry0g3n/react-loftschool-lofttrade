import {call, put, select, take} from 'redux-saga/effects';
import {clearTokenApi, login, registration, setTokenApi} from '../api';
import {getIsAuthorized} from '../reducers/auth';
import {getTokenFromLocalStorage, removeTokenFromLocalStorage, setTokenToLocalStorage,} from '../localstorage';
import {
    fetchLoginFailure, fetchLoginRequest, fetchLoginSuccess, fetchRegistrationFailure, fetchRegistrationRequest,
    logout
} from "../actions/auth";

export function* authFlow() {
    while (true) {
        const isAuthorized = yield select(getIsAuthorized);
        const localStorageToken = yield call(getTokenFromLocalStorage);
        let token;

        if (!isAuthorized) {
            if (localStorageToken) {
                token = localStorageToken;
                yield put(fetchLoginSuccess());
            } else {
                const action = yield take([fetchLoginRequest, fetchRegistrationRequest]);

                if (action.type === fetchLoginRequest.toString()) {
                    /*** Авторизация ***/
                    try {
                        token = yield call(login, action.payload);
                        token = token.data.jwt;
                        yield put(fetchLoginSuccess());

                    } catch (error) {
                        yield put(fetchLoginFailure(error.data.message));
                        continue;
                    }
                } else if (action.type === fetchRegistrationRequest.toString()) {
                    /*** Регистрация ***/
                    try {
                        token = yield call(registration, action.payload);
                        token = token.data.jwt;
                        yield put(fetchLoginSuccess());
                    } catch (error) {
                        yield put(fetchRegistrationFailure(error.data.message.email[0]));
                        continue;
                    }
                }

            }

        }

        yield call(setTokenApi, token);
        yield call(setTokenToLocalStorage, token);
        yield take(logout);
        yield call(removeTokenFromLocalStorage);
        yield call(clearTokenApi);
    }
}
import {
    loginRequest,
    loginSuccess,
    loginFailure,
    registrationRequest,
    registrationSuccess,
    registrationFailure
} from "../actions/auth";
import {takeLatest, call, put} from "redux-saga/effects";
import {login, registration, setTokenApi} from "../api";

export function* authorizeUser(action) {
    const {mail, password} = action.payload;
    try {
        let response = yield call(login, {mail, password});
        yield put(loginSuccess(response));
    } catch (error) {
        yield put(loginFailure(error));
    }
}

export function* registerUser(action) {
    const {mail: email, password} = action.payload;
    try {
        const response = yield call(registration, {email, password});
        if (response.data.result === "created") {
            yield call(setTokenApi, response.data.jwt);
            yield put(registrationSuccess());
        }
    } catch (error) {
        yield put(registrationFailure(error));
    }
}

export function* authFlow() {
    yield takeLatest(loginRequest, authorizeUser);
    yield takeLatest(registrationRequest, registerUser);
}
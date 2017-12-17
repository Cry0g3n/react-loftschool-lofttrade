import {call, put, takeLatest} from 'redux-saga/effects';
import {
    buyCurrencyFailure, buyCurrencyRequest, buyCurrencySuccess, fetchUserFailure, fetchUserRequest,
    fetchUserSuccess, sellCurrencyFailure, sellCurrencyRequest, sellCurrencySuccess
} from '../actions/currency';
import {buyCurrency, getWallet, sellCurrency} from '../api';

function* fetchUserFlow(action) {
    try {
        const response = yield call(getWallet);
        yield put(fetchUserSuccess(response.data.result));
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

function* sellOperationFlow(action) {
    try {
        const response = yield call(sellCurrency, action.payload.currencyName, action.payload.value);
        yield put(sellCurrencySuccess(response.data.result));
        yield put(fetchUserRequest());

    } catch (error) {

        yield put(sellCurrencyFailure(error));
        yield put(fetchUserRequest());
    }
}

function* buyOperationFlow(action) {
    try {
        const response = yield call(buyCurrency, action.payload.currencyName, action.payload.value);
        yield put(buyCurrencySuccess(response.data.result));
        yield put(fetchUserRequest());
    } catch (error) {
        yield put(buyCurrencyFailure(error));
        yield put(fetchUserRequest());
    }
}


export function* fetchUserWatch() {
    yield takeLatest(fetchUserRequest, fetchUserFlow);
}

export function* buyOperationWatch() {
    yield takeLatest(buyCurrencyRequest, buyOperationFlow);
}

export function* sellOperationWatch() {
    yield takeLatest(sellCurrencyRequest, sellOperationFlow);
}

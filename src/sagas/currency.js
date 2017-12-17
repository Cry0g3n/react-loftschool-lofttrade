import {call, cancel, fork, put, select, take, takeLatest} from 'redux-saga/effects';
import {delay} from 'redux-saga';
import {fetchLoginSuccess, logout} from '../actions/auth';
import {getOffset} from '../reducers/currency';
import {
    fetchBtcFailure, fetchBtcRequest, fetchBtcSuccess, fetchEthFailure, fetchEthRequest, fetchEthSuccess, selectBtc,
    selectEth, selectOffset,
} from '../actions/currency';
import {candles} from '../api';

export function* fetchCurrencyFlow() {
    while (true) {
        const offset = yield select(getOffset);
        yield put(fetchBtcRequest(offset));
        yield put(fetchEthRequest(offset));

        yield delay(15000);
    }
}

export function* currencyWatch() {
    let currencyTask;
    while (true) {
        const action = yield take([fetchLoginSuccess, logout, selectBtc, selectEth, selectOffset]);

        if (currencyTask) {
            yield cancel(currencyTask);
            currencyTask = undefined;
        }
        if (action.type !== logout.toString()) currencyTask = yield fork(fetchCurrencyFlow);
    }
}

export function* fetchBtcFlow(action) {
    try {
        const response = yield call(candles, 'btc', action.payload);
        yield put(fetchBtcSuccess(response.data.result));
    } catch (error) {
        yield put(fetchBtcFailure(error));
    }
}

export function* fetchEthFlow(action) {
    try {
        const response = yield call(candles, 'eth', action.payload);
        yield put(fetchEthSuccess(response.data.result));
    } catch (error) {
        yield put(fetchEthFailure(error));
    }
}

export function* fetchBtcWatch() {
    yield takeLatest(fetchBtcRequest, fetchBtcFlow);
}

export function* fetchEthWatch() {
    yield takeLatest(fetchEthRequest, fetchEthFlow);
}
import {takeLatest, put, call} from 'redux-saga/effects';
import {
    fetchUserRequest,
    fetchUserSuccess,
    fetchUserFailure,
    sellCurrencyRequest,
    sellCurrencySuccess,
    sellCurrencyFailure,
    buyCurrencyRequest,
    buyCurrencySuccess,
    buyCurrencyFailure
} from '../actions/currency';
import {getWallet, sellCurrency, buyCurrency} from '../api';

function* fetchUserFlow(action) {
    try {
        const response = yield call(getWallet);
        yield put(fetchUserSuccess(response.data.result));
    } catch (error) {
        yield put(fetchUserFailure(error));
    }
}

// sell
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

// buy
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

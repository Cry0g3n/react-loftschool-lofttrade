import {fork} from 'redux-saga/effects';

import auth from './auth';
import {
    currencyWatch,
    fetchBtcWatch,
    fetchEthWatch
} from "./currency";
import {
    fetchUserWatch,
    sellOperationWatch,
    buyOperationWatch
} from "./wallet";

export default function* () {
    yield fork(auth);
    yield fork(currencyWatch);
    yield fork(fetchBtcWatch);
    yield fork(fetchEthWatch);
    yield fork(fetchUserWatch);
    yield fork(buyOperationWatch);
    yield fork(sellOperationWatch);
}
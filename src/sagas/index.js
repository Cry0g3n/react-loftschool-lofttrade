import {fork} from 'redux-saga/effects';

import auth from './auth';
import {
    currencyWatch,
    fetchBtcWatch,
    fetchEthWatch
} from "./currency";

export default function* () {
    yield fork(auth);
    yield fork(currencyWatch);
    yield fork(fetchBtcWatch);
    yield fork(fetchEthWatch);
}
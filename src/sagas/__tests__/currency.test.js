import {call, select} from 'redux-saga/effects';
import {fetchBtcFlow, fetchCurrencyFlow, fetchEthFlow,} from "../currency";

import {selectBtc, selectEth} from '../../actions/currency';

import {getOffset} from '../../reducers/currency';

import {candles} from '../../api';

describe('currency', () => {

    describe('currencyFlow', () => {
        const saga = fetchCurrencyFlow();

        it('Эффект select getOffset', () => {
            expect(saga.next().value).toEqual(select(getOffset));
        });

    });

    describe('fetchBtcFlow', () => {

        it('Эффект call selectBtc', () => {
            const action = {type: selectBtc.toString(), payload: 'btc'};
            const saga = fetchBtcFlow(action);
            expect(saga.next().value).toEqual(call(candles, 'btc', action.payload));
        });

    });

    describe('fetchEthFlow', () => {
        it('Эффект call selectEth', () => {
            const action = {type: selectEth.toString(), payload: 'eth'};
            const saga = fetchEthFlow(action);
            expect(saga.next().value).toEqual(call(candles, 'eth', action.payload));
        });
    });
});
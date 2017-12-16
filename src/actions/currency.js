import {createActions} from "redux-actions";

const actions = createActions({
    CURRENCY: {
        FETCH_BTC_REQUEST: null,
        FETCH_BTC_SUCCESS: null,
        FETCH_BTC_FAILURE: null,
        FETCH_ETH_REQUEST: null,
        FETCH_ETH_SUCCESS: null,
        FETCH_ETH_FAILURE: null,
        SELECT_BTC: null,
        SELECT_ETH: null,
        SELECT_OFFSET: null,
        FETCH_USER_REQUEST: null,
        FETCH_USER_SUCCESS: null,
        FETCH_USER_FAILURE: null,
        SELL_CURRENCY_REQUEST: null,
        SELL_CURRENCY_SUCCESS: null,
        SELL_CURRENCY_FAILURE: null,
        BUY_CURRENCY_REQUEST: null,
        BUY_CURRENCY_SUCCESS: null,
        BUY_CURRENCY_FAILURE: null
    }
});

export const fetchBtcRequest = actions.currency.fetchBtcRequest;
export const fetchEthRequest = actions.currency.fetchEthRequest;
export const fetchBtcSuccess = actions.currency.fetchBtcSuccess;
export const fetchBtcFailure = actions.currency.fetchBtcFailure;
export const fetchEthFailure = actions.currency.fetchEthFailure;
export const fetchEthSuccess = actions.currency.fetchEthSuccess;
export const selectBtc = actions.currency.selectBtc;
export const selectEth = actions.currency.selectEth;
export const selectOffset = actions.currency.selectOffset;

export const fetchUserRequest = actions.currency.fetchUserRequest;
export const fetchUserSuccess = actions.currency.fetchUserSuccess;
export const fetchUserFailure = actions.currency.fetchUserFailure;

export const sellCurrencyRequest = actions.currency.sellCurrencyRequest;
export const sellCurrencySuccess = actions.currency.sellCurrencySuccess;
export const sellCurrencyFailure = actions.currency.sellCurrencyFailure;

export const buyCurrencyRequest = actions.currency.buyCurrencyRequest;
export const buyCurrencySuccess = actions.currency.buyCurrencySuccess;
export const buyCurrencyFailure = actions.currency.buyCurrencyFailure;
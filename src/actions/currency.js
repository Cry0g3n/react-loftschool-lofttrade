import {createActions} from "redux-actions";

const actionCreators = createActions({
    CURRENCY: {
        SELECT_OFFSET: undefined,
        FETCH_BTC_REQUEST: undefined,
        FETCH_BTC_SUCCESS: undefined,
        FETCH_BTC_FAILURE: undefined,
        FETCH_ETH_REQUEST: undefined,
        FETCH_ETH_SUCCESS: undefined,
        FETCH_ETH_FAILURE: undefined,
        SELECT_BTC: undefined,
        SELECT_ETH: undefined,
        SELL_CURRENCY_REQUEST: undefined,
        SELL_CURRENCY_SUCCESS: undefined,
        SELL_CURRENCY_FAILURE: undefined,
        BUY_CURRENCY_REQUEST: undefined,
        BUY_CURRENCY_SUCCESS: undefined,
        BUY_CURRENCY_FAILURE: undefined
    }
});

export const selectBtc = actionCreators.currency.selectBtc;
export const selectEth = actionCreators.currency.selectEth;
export const fetchBtcRequest = actionCreators.currency.fetchBtcRequest;
export const fetchEthRequest = actionCreators.currency.fetchEthRequest;
export const fetchBtcSuccess = actionCreators.currency.fetchBtcSuccess;
export const fetchBtcFailure = actionCreators.currency.fetchBtcFailure;
export const fetchEthFailure = actionCreators.currency.fetchEthFailure;
export const fetchEthSuccess = actionCreators.currency.fetchEthSuccess;
export const selectOffset = actionCreators.currency.selectOffset;

// export const sellCurrencyRequest = actionCreators.currency.sellCurrencyRequest;
// export const sellCurrencySuccess = actionCreators.currency.sellCurrencySuccess;
// export const sellCurrencyFailure = actionCreators.currency.sellCurrencyFailure;
//
// export const buyCurrencyRequest = actionCreators.currency.buyCurrencyRequest;
// export const buyCurrencySuccess = actionCreators.currency.buyCurrencySuccess;
// export const buyCurrencyFailure = actionCreators.currency.buyCurrencyFailure;

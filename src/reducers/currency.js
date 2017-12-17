import {
    fetchBtcFailure, fetchBtcRequest, fetchBtcSuccess, fetchEthFailure, fetchEthRequest, fetchEthSuccess, selectBtc,
    selectEth, selectOffset
} from "../actions/currency";
import {handleActions} from "redux-actions";

const initialState = {
    selected: "btc",
    offset: "4h",
    btc: [],
    eth: [],
    isFetching: false
};

export default handleActions({
    [fetchBtcRequest]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [fetchBtcSuccess]: (state, action) => ({
        ...state,
        btc: action.payload,
        isFetching: false
    }),
    [fetchBtcFailure]: (state, action) => ({
        ...state,
        btc: null
    }),
    [fetchEthRequest]: (state, action) => ({
        ...state,
        isFetching: true
    }),
    [fetchEthSuccess]: (state, action) => ({
        ...state,
        eth: action.payload,
        isFetching: false
    }),
    [fetchEthFailure]: (state, action) => ({
        ...state,
        eth: null
    }),
    [selectBtc]: (state, action) => ({
        ...state,
        selected: action.payload
    }),
    [selectEth]: (state, action) => ({
        ...state,
        selected: action.payload
    }),
    [selectOffset]: (state, action) => ({
        ...state,
        offset: action.payload
    })
}, initialState);

export const isFetching = state => state.currency.isFetching;
export const sell = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.sell]);
export const purchase = state => state.currency[state.currency.selected].map(item => [new Date(item.mts), item.purchase]);
export const getMinVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.purchase);
    return Math.min.apply(null, arr);
};
export const getMaxVal = state => {
    let arr = state.currency[state.currency.selected].map((el) => el.sell);
    return Math.max.apply(null, arr);
};
export const getOffset = state => state.currency.offset;
export const getSymbol = state => state.currency.selected;

export const getCurrentBtcSell = state => {
    return state.currency.btc.length > 0 ? state.currency.btc[0].sell : 0;
};

export const getCurrentBtcPurchase = state => {
    return state.currency.btc.length > 0 ? state.currency.btc[0].purchase : 0;
};

export const getCurrentEthSell = state => {
    return state.currency.eth.length > 0 ? state.currency.eth[0].sell : 0;
};

export const getCurrentEthPurchase = state => {
    return state.currency.eth.length > 0 ? state.currency.eth[0].purchase : 0;
};
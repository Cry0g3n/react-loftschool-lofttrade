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
} from "../actions/currency";
import {handleActions} from "redux-actions";

const initialState = {
    isLoading: false,
    coins: {
        usd: 0,
        btc: 0,
        eth: 0
    },
    error: null
};

export default handleActions({
    [fetchUserRequest]: (state, action) => ({
        ...state,
        isLoading: true
    }),
    [fetchUserSuccess]: (state, action) => ({
        ...state,
        isLoading: false,
        coins: action.payload
    }),
    [fetchUserFailure]: (state, action) => ({
        ...initialState,
        error: action.payload
    }),
    [sellCurrencyRequest]: (state, action) => ({
        ...state,
        isLoading: true,
        error: null
    }),
    [sellCurrencySuccess]: (state, action) => ({
        ...state,
        isLoading: false,
        error: null
    }),
    [sellCurrencyFailure]: (state, action) => ({
        ...initialState,
        error: action.payload
    }),
    [buyCurrencyRequest]: (state, action) => ({
        ...state,
        isLoading: true,
        error: null
    }),
    [buyCurrencySuccess]: (state, action) => ({
        ...state,
        isLoading: false,
        error: null
    }),
    [buyCurrencyFailure]: (state, action) => ({
        ...initialState,
        error: action.payload
    })

}, initialState);


export const getError = state => state.wallet.error;
export const getIsLoading = state => state.wallet.isLoading;
export const getCoinsMoney = state => state.wallet.coins.usd;
export const getCoinsBtc = state => state.wallet.coins.btc;
export const getCoinsEth = state => state.wallet.coins.eth;

  
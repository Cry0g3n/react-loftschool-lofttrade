import {
    buyCurrencyFailure, buyCurrencyRequest, buyCurrencySuccess, fetchUserFailure, fetchUserRequest,
    fetchUserSuccess, sellCurrencyFailure, sellCurrencyRequest, sellCurrencySuccess
} from "../../actions/currency";
import currencyReduser from "../wallet";

describe('Редьюсер wallet', () => {
    it("action fetchUserRequest изменяет флаг isLoading на true", () => {
        const nextState = currencyReduser({isLoading: false}, {type: fetchUserRequest.toString()});
        expect(nextState.isLoading).toEqual(true);
    });
    it("action fetchUserSuccess изменяет флаг isLoading на false", () => {
        const nextState = currencyReduser({isLoading: true}, {type: fetchUserSuccess.toString()});
        expect(nextState.isLoading).toEqual(false);
    });
    it("action fetchUserSuccess наполняет поле coins данными", () => {
        const data = {
            usd: 10000,
            btc: 0,
            eth: 0
        }
        const nextState = currencyReduser({coins: null}, {type: fetchUserSuccess.toString(), payload: data});
        expect(nextState.coins).toEqual(data);
    });
    it("action fetchUserFailure изменяет поле error", () => {
        const nextState = currencyReduser({error: true}, {type: fetchUserFailure.toString(), payload: 'error'});
        expect(nextState.error).toEqual('error');
    });
    it("action sellCurrencySuccess изменяет поле isLoading на false", () => {
        const nextState = currencyReduser({isLoading: true}, {type: sellCurrencySuccess.toString()});
        expect(nextState.isLoading).toEqual(false);
    });
    it("action sellCurrencySuccess изменяет поле error на null", () => {
        const nextState = currencyReduser({error: 'error'}, {type: sellCurrencySuccess.toString()});
        expect(nextState.error).toEqual(null);
    });
    it("action buyCurrencyRequest изменяет поле isLoading на true", () => {
        const nextState = currencyReduser({isLoading: false}, {type: buyCurrencyRequest.toString()});
        expect(nextState.isLoading).toEqual(true);
    });
    it("action buyCurrencySuccess изменяет поле isLoading на false", () => {
        const nextState = currencyReduser({isLoading: true}, {type: buyCurrencySuccess.toString()});
        expect(nextState.isLoading).toEqual(false);
    });
    it("action sellCurrencyRequest изменяет поле isLoading на true", () => {
        const nextState = currencyReduser({isLoading: false}, {type: sellCurrencyRequest.toString()});
        expect(nextState.isLoading).toEqual(true);
    });
    it("action sellCurrencySuccess изменяет поле isLoading на false", () => {
        const nextState = currencyReduser({isLoading: true}, {type: sellCurrencySuccess.toString()});
        expect(nextState.isLoading).toEqual(false);
    });
    it("action sellCurrencyFailure изменяет поле error", () => {
        const nextState = currencyReduser({error: true}, {type: sellCurrencyFailure.toString(), payload: 'error'});
        expect(nextState.error).toEqual('error');
    });
    it("action buyCurrencyFailure изменяет поле error", () => {
        const nextState = currencyReduser({error: true}, {type: buyCurrencyFailure.toString(), payload: 'error'});
        expect(nextState.error).toEqual('error');
    });
});
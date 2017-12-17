import {
    fetchBtcFailure, fetchBtcRequest, fetchBtcSuccess, fetchEthFailure, fetchEthRequest, fetchEthSuccess, selectBtc,
    selectEth, selectOffset
} from "../../actions/currency";
import currencyReducer from "../currency";

describe('Редьюсер currency', () => {
    it("action fetchBtcRequest изменяет флаг isFetching на true", () => {
        const nextState = currencyReducer({isFetching: false}, {type: fetchBtcRequest.toString()});
        expect(nextState.isFetching).toEqual(true);
    });

    it("action fetchBtcSuccess изменяет флаг isFetching на false", () => {
        const nextState = currencyReducer({isFetching: true}, {type: fetchBtcSuccess.toString()});
        expect(nextState.isFetching).toEqual(false);
    });

    it("action fetchBtcSuccess изменяет поле btc", () => {
        const data = [{}, {}];
        const nextState = currencyReducer({btc: null}, {type: fetchBtcSuccess.toString(), payload: data});
        expect(nextState.btc).toEqual(data);
    });

    it("action fetchBtcFailure изменяет поле btc на null", () => {
        const nextState = currencyReducer({btc: [{}, {}]}, {type: fetchBtcFailure.toString()});
        expect(nextState.btc).toEqual(null);
    });

    it("action fetchEthRequest изменяет флаг isFetching на true", () => {
        const nextState = currencyReducer({isFetching: false}, {type: fetchEthRequest.toString()});
        expect(nextState.isFetching).toEqual(true);
    });

    it("action fetchEthSuccess изменяет флаг isFetching на false", () => {
        const nextState = currencyReducer({isFetching: true}, {type: fetchEthSuccess.toString()});
        expect(nextState.isFetching).toEqual(false);
    });

    it("action fetchEthSuccess изменяет поле eth", () => {
        const data = [{}, {}];
        const nextState = currencyReducer({eth: null}, {type: fetchEthSuccess.toString(), payload: data});
        expect(nextState.eth).toEqual(data);
    });

    it("action fetchEthFailure изменяет поле eth на null", () => {
        const nextState = currencyReducer({eth: [{}, {}]}, {type: fetchEthFailure.toString()});
        expect(nextState.eth).toEqual(null);
    });

    it("action selectBtc изменяет поле selected на btc", () => {
        const nextState = currencyReducer({btc: 'eth'}, {type: selectBtc.toString(), payload: 'btc'});
        expect(nextState.selected).toEqual('btc');
    });

    it("action selectEth изменяет поле selected на eth", () => {
        const nextState = currencyReducer({btc: 'btc'}, {type: selectEth.toString(), payload: 'eth'});
        expect(nextState.selected).toEqual('eth');
    });

    it("action selectOffset изменяет поле offset на payload", () => {
        const nextState = currencyReducer({offset: '2h'}, {type: selectOffset.toString(), payload: '4h'});
        expect(nextState.offset).toEqual('4h');
    });
});
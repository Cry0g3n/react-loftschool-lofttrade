import React from 'react';
import {shallow} from 'enzyme';

import {Market} from '../Market';
import Header from "../../Header/index";
import UserInfo from "../../Wallet/index";
import TradeOperations from "../../TradeOperations/index";
import Footer from "../../Footer/index";

describe('Компонент Market', () => {
    describe('Содержит метод', () => {
        const match = {params: {symbol: 'btc'}};
        const wrapper = shallow(<Market match={match} selectBtc={jest.fn()} fetchUserRequest={jest.fn()}/>);

        it('componentDidMount', () => {
            expect(wrapper.instance().componentDidMount).toBeDefined();
        });

        it('componentWillReceiveProps', () => {
            expect(wrapper.instance().componentWillReceiveProps).toBeDefined();
        });

        it('selectPeriodHandler', () => {
            expect(wrapper.instance().selectPeriodHandler).toBeDefined();
        });

    });

    describe('Содержит компонент', () => {
        const match = {params: {symbol: 'btc'}};
        const wrapper = shallow(<Market match={match} selectBtc={jest.fn()} fetchUserRequest={jest.fn()}/>);

        it('Header', () => {
            expect(wrapper.find(Header)).toHaveLength(1);
        });
        it('UserInfo', () => {
            expect(wrapper.find(UserInfo)).toHaveLength(1);
        });
        it('TradeOperations', () => {
            expect(wrapper.find(TradeOperations)).toHaveLength(1);
        });
        it('Footer', () => {
            expect(wrapper.find(Footer)).toHaveLength(1);
        });
    });
});


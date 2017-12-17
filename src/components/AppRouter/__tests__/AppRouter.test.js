import React from 'react';
import {shallow} from 'enzyme';

import {Redirect, Route, Switch} from 'react-router-dom';
import {AppRouter} from '../AppRouter';
import PrivateRoute from '../../PrivateRoute/PrivateRoute';

describe('AppRouter', () => {
    const wrapper = shallow(<AppRouter/>);

    it("В AppRouter должен содержаться компонент Switch", () => {
        expect(wrapper.find(Switch)).toHaveLength(1);
    });
    it('В AppRouter должен содержаться компонент PrivateRoute', () => {
        expect(wrapper.find(PrivateRoute)).not.toHaveLength(0);
    });
    it("В AppRouter должен содержаться компонент PrivateRoute с атрибутом path='/trade/:symbol' ", () => {
        const privateRoute = wrapper.findWhere(
            el => el.type() === PrivateRoute && el.prop('path') === '/trade/:symbol',
        );
        expect(privateRoute).toHaveLength(1);
    });
    it('В AppRouter должен содержаться компонент Route', () => {
        expect(wrapper.find(Route)).not.toHaveLength(0);
    });

    it("В AppRouter должен содержаться компонент Route c атрибутом path='/' ", () => {
        const findRoutes = wrapper.findWhere(
            el => el.type() === Route && el.prop('path') === '/',
        );
        expect(findRoutes).toHaveLength(1);
    });

    it('В AppRouter редирект на /', () => {
        const findRedirects = wrapper.findWhere(
            el => el.type() === Redirect && el.prop('to') === '/',
        );
        expect(findRedirects).toHaveLength(1);
    });
});
import React, {Component} from 'react';
import {Redirect, Route, Switch, withRouter} from 'react-router-dom';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import AuthPage from '../AuthPage';
import Trade from '../Market';

import {connect} from "react-redux";
import {getIsAuthorized} from "../../reducers/auth";

export class AppRouter extends Component {

    render() {
        const {isAuthorized} = this.props;

        return (
            <Switch>
                <PrivateRoute path="/trade/:symbol" exact component={Trade}/>
                {isAuthorized ? <Redirect to="/trade/btc"/> : null}
                <Route path="/" exact component={AuthPage}/>
                <Redirect to="/"/>
            </Switch>

        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});


export default withRouter(connect(mapStateToProps)(AppRouter));  
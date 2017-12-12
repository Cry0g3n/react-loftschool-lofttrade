import React, {Component} from "react";
import {
    Redirect,
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import {connect} from "react-redux";
import "./AppRouter.css";
import AuthPage from "../AuthPage/AuthPage";
import UserPage from "../UserPage/UserPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import {getIsAuthorized} from "../../reducers/auth";

export class AppRouter extends Component {
    render() {
        const {isAuthorized} = this.props;

        return (
            <div className="App">
                <Switch>
                    <PrivateRoute path="/trade/:cur" component={UserPage}/>
                    {isAuthorized ? <Redirect to="/trade/btc"/> : null}
                    <Route path="/" exact component={AuthPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthorized: getIsAuthorized(state)
});

export default withRouter(connect(mapStateToProps, null)(AppRouter));

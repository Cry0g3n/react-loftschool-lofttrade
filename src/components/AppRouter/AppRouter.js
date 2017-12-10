import React, {Component} from "react";
import {
    Route,
    Switch,
    withRouter
} from "react-router-dom";
import {connect} from "react-redux";
import "./AppRouter.css";
import AuthPage from "../AuthPage/AuthPage";

export class AppRouter extends Component {
    render() {
        return (
            <div className="App">
                <Switch>
                    <Route path="/" exact component={AuthPage}/>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps = state => ({});

export default withRouter(connect(mapStateToProps, null)(AppRouter));

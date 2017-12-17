import React, {PureComponent} from 'react';
import {Redirect, Route} from 'react-router-dom';
import {connect} from 'react-redux';
import {getIsAuthorized} from '../../reducers/auth';


class PrivateRoute extends PureComponent {
    render() {
        const {token, component: Component, ...rest} = this.props;

        return (
            <Route
                {...rest}
                render={props => (token ? <Component {...props} /> : <Redirect to="/"/>)}
            />
        );
    }
}

export default connect(state => ({
    token: getIsAuthorized(state)
}))(PrivateRoute);
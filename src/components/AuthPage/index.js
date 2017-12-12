import React, { Component } from 'react';
import { Particles } from 'react-particles-js';
import { connect } from 'react-redux';

import './styles.css';
import particlesParams from '../../particles-params';
import logo from '../../assets/Logo.svg';
import iconUser from '../../assets/login/user-shape.svg';
import iconPadlock from '../../assets/login/padlock-unlock.svg';
import { loginRequest, registrationRequest } from '../../actions/auth';
import { getError } from '../../reducers/auth';

export class AuthPage extends Component {
    state = {
        email: '',
        password: '',
        isRegistration: false
    };

    changeHandler = e => {
        const { value, name } = e.target;

        this.setState({
            [name]: value
        });
    };

    changeMode = e => {
        e.preventDefault();

        this.setState({
            isRegistration: !this.state.isRegistration
        });
    };

    submitHandler = () => {
        const { isRegistration, email, password } = this.state;
        const { loginRequest, registrationRequest } = this.props;

        if (isRegistration) {
            registrationRequest({ email, password });
        } else {
            loginRequest({ email, password });
        }
    };

    render() {
        const { error } = this.props;
        const { email, password, isRegistration } = this.state;

        return <div className="auth">
            <Particles className="particles" params={particlesParams} />
            <div className="wrapper">
                <img src={logo} alt="logo" className="logo" />
                <div className="block">
                    <div className="field-wrapper">
                        <img src={iconUser} alt="login" className="field-icon" />
                        <input
                            type="email"
                            className="field"
                            placeholder="login"
                            name="email"
                            value={email}
                            onChange={this.changeHandler}
                        />
                    </div>
                    <div className="field-wrapper">
                        <img src={iconPadlock} alt="password" className="field-icon" />
                        <input
                            type="password"
                            className="field"
                            placeholder="password"
                            name="password"
                            value={password}
                            onChange={this.changeHandler}
                        />
                    </div>
                    {error && <div className="error">{error}</div>}
                    <button className="btn" onClick={this.submitHandler}>
                        {isRegistration ? 'Регистрация' : 'Войти'}
                    </button>
                </div>
                <div className="block center">
                    {
                        isRegistration ?
                            <div className="footer">
                                Уже зарегистрированы? <a href="" onClick={this.changeMode}>Войти</a>
                            </div> :
                            <div className="footer">
                                Впервые на сайте? <a href="" onClick={this.changeMode}>Регистрация</a>
                            </div>
                    }
                </div>
            </div>
        </div>
    }
}

const mapStateToProps = state => ({
    error: getError(state)
});

const mapDispatchToProps = {
    loginRequest, registrationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
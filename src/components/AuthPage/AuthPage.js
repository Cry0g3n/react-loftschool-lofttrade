import React, {PureComponent} from 'react';
import {connect} from "react-redux";
import Particles from "react-particles-js";
import ParticlesParams from "../../particles-params";
import {fetchLoginRequest, fetchRegistrationRequest} from "../../actions/auth";
import {getIsLoginError, getIsRegistrationError} from "../../reducers/auth";
import userIcon from '../../assets/login/user-shape.svg';
import lockIcon from '../../assets/login/padlock-unlock.svg';
import logo from '../../assets/Logo.svg';

import './AuthPage.css';
import {Auth, AuthLogo, AuthWrapper} from "./Styles";


export class AuthPage extends PureComponent {

    state = {
        authData: {
            email: '',
            password: ''
        },
        registration: false
    };

    changeHandler = (e) => {
        this.setState({authData: {...this.state.authData, [e.target.name]: e.target.value}});
    };

    changeMode = (e) => {
        e.preventDefault();
        this.setState({registration: !this.state.registration});
    };

    submitHandler = () => {
        if (this.state.registration) {
            this.props.fetchRegistrationRequest(this.state.authData);
        } else {
            this.props.fetchLoginRequest(this.state.authData);
        }
    };

    render() {

        const bntTxt = this.state.registration ? "Регистрация" : "Вход";
        const linkTxt = this.state.registration ? "Войти" : "Зарегистрироваться";
        const regTxt = this.state.registration ? "Уже зарегистрированы?" : "Впервые на сайте?";
        const error = this.props.loginError || this.props.registrationError;

        return (
            <div className="app">
                <Particles params={ParticlesParams} className="app__particle-bg"/>
                <AuthWrapper>
                    <Auth>
                        <AuthLogo src={logo}/>
                        <div className="auth__form">
                            <div className="auth__row">
                                <div className="auth__area-box">
                                    <img className="auth__col auth__col_login" src={userIcon} alt="userIcon"></img>
                                    <div className="auth__col">
                                        <input
                                            type="text"
                                            className="auth__area auth__area_email"
                                            placeholder="login"
                                            name="email"
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="auth__row">
                                <div className="auth__area-box">
                                    <img className="auth__col auth__col_pass" src={lockIcon} alt="lockIcon"></img>
                                    <div className="auth__col">
                                        <input
                                            type="password"
                                            className="auth__area auth__area_password"
                                            placeholder="password"
                                            name="password"
                                            onChange={this.changeHandler}
                                        />
                                    </div>
                                </div>
                            </div>
                            {error && <div className="auth__error">{error}</div>}
                            <div className="auth__row auth__row_btn">
                                <button className="auth__btn" onClick={this.submitHandler}>{bntTxt}</button>
                            </div>
                        </div>
                        <div className="auth-panel">
                            {regTxt} <span className="link change-auth-method"
                                           onClick={this.changeMode}>{linkTxt}</span>
                        </div>
                    </Auth>
                </AuthWrapper>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    loginError: getIsLoginError(state),
    registrationError: getIsRegistrationError(state)
});

const mapDispatchToProps = {
    fetchLoginRequest,
    fetchRegistrationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
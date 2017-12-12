import React, {Component} from 'react';
import {Particles} from 'react-particles-js';
import {connect} from 'react-redux';
import './styles.css';
import particlesParams from '../../particles-params';
import logo from '../../assets/Logo.svg';
// import iconUser from '../../assets/login/user-shape.svg';
// import iconPadlock from '../../assets/login/padlock-unlock.svg';
import {loginRequest, registrationRequest} from '../../actions/auth';
import {getError} from '../../reducers/auth';
import {
    FormWrapper, Form, LoginFormWrapper, Logo, Main, LoginForm, UserIcon, EmailInput,
    EmailInputWrapper, PasswordInputWrapper, LockIcon, PasswordInput, SubmitButton, Footer
} from "./Styles";
import './AuthPage.css';

export class AuthPage extends Component {
    state = {
        email: '',
        password: '',
        isRegistration: false
    };

    changeHandler = e => {
        const {value, name} = e.target;

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
        const {isRegistration, email, password} = this.state;
        const {loginRequest, registrationRequest} = this.props;

        if (isRegistration) {
            registrationRequest({email, password});
        } else {
            loginRequest({email, password});
        }
    };

    render() {
        const {error} = this.props;
        const {email, password, isRegistration} = this.state;

        return (
            <div>
                <Main>
                    <Particles className="particles" params={particlesParams}/>
                    <FormWrapper>
                        <Form>
                            <Logo
                                src={logo}
                                alt='logo'
                            >
                            </Logo>
                            <LoginFormWrapper className='form-wrapper'>
                                <LoginForm>
                                    <EmailInputWrapper>
                                        <UserIcon></UserIcon>
                                        <EmailInput
                                            type="email"
                                            placeholder="Login"
                                            name="email"
                                            value={email}
                                            onChange={this.changeHandler}
                                        >
                                        </EmailInput>
                                    </EmailInputWrapper>
                                    <PasswordInputWrapper>
                                        <LockIcon></LockIcon>
                                        <PasswordInput
                                            type="password"
                                            placeholder="Password"
                                            name="password"
                                            value={password}
                                            onChange={this.changeHandler}
                                        >
                                        </PasswordInput>
                                    </PasswordInputWrapper>
                                    {error && <div className="error">{error}</div>}
                                    <SubmitButton onClick={this.submitHandler}>
                                        {isRegistration ? 'Регистрация' : 'Войти'}
                                    </SubmitButton>
                                </LoginForm>
                            </LoginFormWrapper>

                            <Footer className='footer'>
                                {
                                    isRegistration ?
                                        <div className="footer1">
                                            Уже зарегистрированы? <a href="" onClick={this.changeMode}>Войти</a>
                                        </div> :
                                        <div className="footer1">
                                            Впервые на сайте? <a href="" onClick={this.changeMode}>Регистрация</a>
                                        </div>
                                }
                            </Footer>
                        </Form>
                    </FormWrapper>

                </Main>
            </div>
        )
    }
}

const mapStateToProps = state => ({
    error: getError(state)
});

const mapDispatchToProps = {
    loginRequest, registrationRequest
};

export default connect(mapStateToProps, mapDispatchToProps)(AuthPage);
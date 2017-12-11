import React, {Component} from 'react';
import {Form, FormCenter, LoginFormWrapper, Logo, Main} from "./Styles";
import logo from "../../assets/Logo.svg";

class AuthPage extends Component {
    render() {
        return (
            <div>
                <Main>
                    <Form>
                        <FormCenter>
                            <Logo
                                src={logo}
                                alt='logo'
                            >
                            </Logo>
                            <LoginFormWrapper>

                            </LoginFormWrapper>
                        </FormCenter>
                    </Form>
                </Main>
            </div>
        );
    }
}

export default AuthPage;

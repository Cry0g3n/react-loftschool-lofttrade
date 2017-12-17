import {fetchLoginFailure, fetchLoginSuccess, fetchRegistrationFailure, logout} from "../../actions/auth";
import authReducer from "../auth";

describe('Редьюсер auth', () => {

    const initialState = {
        isAuthorized: false,
        loginError: null,
        registrationError: null
    };

    it("action fetchLoginSuccess изменяет флаг isAuthorized", () => {
        const nextState = authReducer({isAuthorized: false}, {type: fetchLoginSuccess.toString()});
        expect(nextState.isAuthorized).toEqual(true);
    });

    it("action fetchLoginFailure изменяет поле loginError", () => {
        const error = 'error';
        const nextState = authReducer({loginError: null}, {type: fetchLoginFailure.toString(), payload: error});
        expect(nextState.loginError).toEqual(error);
    });

    it("action fetchRegistrationFailure изменяет поле registrationError", () => {
        const error = 'error';
        const nextState = authReducer({registrationError: null}, {
            type: fetchRegistrationFailure.toString(),
            payload: error
        });
        expect(nextState.registrationError).toEqual(error);
    });

    it("action logout изменяет state на initialState", () => {
        const nextState = authReducer({registrationError: 'error'}, {type: logout.toString()});
        expect(nextState).toEqual(initialState);
    });
});
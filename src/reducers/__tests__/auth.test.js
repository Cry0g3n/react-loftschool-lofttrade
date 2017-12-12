import {
    isFetching,
    isFetched,
    token,
    error
} from '../auth';
import {
    loginRequest,
    loginReject,
    loginSuccess,
    registrationRequest,
    registrationReject,
    logout
} from '../../actions/auth';

describe('Auth reducer', () => {
    const tokenStr = 'token';
    const networkError = new Error('test error');

    it('isFetching', () => {
        expect(isFetching(false, loginRequest())).toBeTruthy();
        expect(isFetching(false, loginReject())).toBeFalsy();
        expect(isFetching(false, loginSuccess())).toBeFalsy();
        expect(isFetching(false, registrationRequest())).toBeTruthy();
        expect(isFetching(false, registrationReject())).toBeFalsy();
        expect(isFetching(false, logout())).toBeFalsy();
    });

    it('isFetched', () => {
        expect(isFetched(false, loginRequest())).toBeFalsy();
        expect(isFetched(false, loginReject())).toBeTruthy();
        expect(isFetched(false, loginSuccess())).toBeTruthy();
        expect(isFetched(false, registrationRequest())).toBeFalsy();
        expect(isFetched(false, registrationReject())).toBeTruthy();
        expect(isFetched(false, logout())).toBeFalsy();
    });

    it('token', () => {
        expect(token(null, loginRequest())).toEqual(null);
        expect(token(null, loginReject())).toEqual(null);
        expect(token(null, loginSuccess(tokenStr))).toEqual(tokenStr);
        expect(token(null, registrationRequest())).toEqual(null);
        expect(token(null, registrationReject())).toEqual(null);
        expect(token(null, logout())).toEqual(null);
    });

    it('error', () => {
        expect(error(null, loginRequest())).toEqual(null);
        expect(error(null, loginReject(networkError))).toEqual(networkError);
        expect(error(null, loginSuccess())).toEqual(null);
        expect(error(null, registrationRequest())).toEqual(null);
        expect(error(null, registrationReject(networkError))).toEqual(networkError);
        expect(error(null, logout())).toEqual(null);
    });
});
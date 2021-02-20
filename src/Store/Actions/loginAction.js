import { LOGIN_SUCCESS, LOGIN_USER, LOGIN_USER_ASYNC, LOGIN_USER_SUCCESS_ASYNC } from "../Constants/loginConstants"

export const usrLogin = user => {
    console.log('user login actions', user);
    return { type: LOGIN_USER_ASYNC, payload: user }
}
export const usrLoginSuccess = token => {
    console.log('user login success', token);
    return { type: LOGIN_SUCCESS, payload: token }
}
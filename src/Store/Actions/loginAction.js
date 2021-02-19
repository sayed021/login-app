import { LOGIN_USER } from "../Constants/loginConstants"

export const usrLogin = user => {
    console.log('this is user login', user);
    return { type: LOGIN_USER, payload: user }
}
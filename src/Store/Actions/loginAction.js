import { LOGIN_USER } from "../Constants/loginConstants"


export const login = user => {
    
    return { type: LOGIN_USER, payload: user }

}
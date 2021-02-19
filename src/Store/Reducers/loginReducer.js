import { 
    LOGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS 
} from "../Constants/loginConstants";

const loginState = {
  login: false,
  loginError: false,
  loginSuccess: false,
}

export const LoginReducer = (state = loginState, action) => {
    switch(action.type) {
      case LOGIN_USER:
        console.log('payload: ', action.payload);
        state.loginError = false;
        state.loginSuccess = true;
        state.login = true;
        return {...state, login:true}
        break;
        

      default:
        return state;
    }
}
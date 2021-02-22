import { TOKEN_KEY } from "../../services/auth";
import { getCookie } from "../../services/cookieService";
import { 
    LOGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS 
} from "../Constants/loginConstants";

const loginState = {
  logegIn: getCookie(TOKEN_KEY),
  loginError: false,
  loginSuccess: false,
  loginLoading: false
}

export const LoginReducer = (state = loginState, action) => {
    switch(action.type) {

      case LOGIN_USER:

        state.loginError = false;
        state.loginSuccess = false;
        state.loginLoading = true;
        state.logegIn = false;

        return {...state}   

      case LOGIN_SUCCESS:
        state.loginError = false;
        state.loginSuccess = true;
        state.loginLoading = false;
        state.logegIn = true;
        return {...state }

      case LOGIN_ERROR:
        state.loginError = true;
        state.loginSuccess = false;
        state.loginLoading = false;
        state.logegIn = false;
        return {...state }        

      default:
        return state;
    }
}
import { 
    LOGIN_USER,
    LOGIN_ERROR,
    LOGIN_SUCCESS 
} from "../Constants/loginConstants";

const loginState = {
    logegIn:false,
    // logInLoading:false,
    // logInError:false,
    // logInSuccess: false,
}

export const LoginReducer = (state = loginState, action) => {
    switch(action.type) {

      case LOGIN_USER:
          alert('this is login reducer call');
          
        return [...state,{ logegIn: '25487'}];

      default:
        return state;
    }
}
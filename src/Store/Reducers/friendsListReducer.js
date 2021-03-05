import { TOKEN_KEY } from "../../services/auth";
import { getCookie } from "../../services/cookieService";
import { FRIENDS_ERROR, FRIENDS_LOADING, FRIENDS_SUCCESS } from "../Constants/friendListConstants";


const initialstate = {
  data: null,
  loading: false,
  success: false,
  error: false,
  errorMessage: null
}

export const FriendsListReducer = (state = initialstate, action) => {
    switch(action.type) {
      case FRIENDS_LOADING:
        state.errorMessage = null;
        state.loading = true;
        state.error = false;
        state.success = false;
        state.data = [];
        return {...state}   

      case FRIENDS_SUCCESS:
        state.data = action.payload.data;
        state.errorMessage = null;
        state.error = false;
        state.loading = false;
        state.success = true;
        return {...state }

      case FRIENDS_ERROR:
        state.data = null;
        state.error = true;
        state.success = false;
        state.loading = false;
        state.errorMessage = action.payload.message;
        return {...state }

      default:
        return state;
    }
}
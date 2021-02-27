import { GET_USER, USER_ERROR, USER_LOADING, USER_SUCCESS } from "../Constants/userConstant";


const user = {
  data: null,
  loading: false,
  error: false, 
  success: false
}

export default function (state=user, action) {
    switch(action.type) {

      case USER_LOADING:
        state.loading = true;
        state.error = false;
        state.success = false;
        state.data=[];
        return {
          ...state
        };

      case USER_SUCCESS:
        state.loading = false;
        state.error = false;
        state.success = true;
        state.data=action.payload.data;
        return {
          ...state
        };


      case USER_ERROR:
        state.loading = false;
        state.error = true;
        state.success = false;
        state.data = [];
        return {
          ...state
        };

      default:
        return state;
    }
}
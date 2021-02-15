import { combineReducers, createStore } from "redux";
import { LoginReducer } from "./Reducers/loginReducer";



let devTool=null;
if(process.env.NODE_ENV=='development') {
  devTool= window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
}

export const store = createStore(
    combineReducers({
      login: LoginReducer
    }), 
    devTool
);

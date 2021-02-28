import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'


import createReducer from "./Reducers";
import { loginSaga } from "./Sagas/loginSaga";
import  rootSaga  from "./Sagas";
import { userSaga } from "./Sagas/userSaga";
import { TOKEN_KEY } from "../services/userServices";
import { getCookie } from "../services/cookieService";
// import {rootSaga} from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [];
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const composeEnhancers = process.env.NODE_ENV !== 'production' && typeof window === 'object' &&  
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : compose

export const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

// sagaMiddleware.run(loginSaga)
// run saga ans watch
sagaMiddleware.run(rootSaga);

// if(getCookie(TOKEN_KEY)) {
//   sagaMiddleware.run(userSaga)
// }else {
//   sagaMiddleware.run(loginSaga)
// }



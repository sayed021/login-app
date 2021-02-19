import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import createSagaMiddleware from 'redux-saga'


import createReducer from "./Reducers";
import rootSaga from './Sagas/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const enhancers = [];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    createReducer(),
    composeEnhancers(applyMiddleware(...middleware), ...enhancers)
);

sagaMiddleware.run(rootSaga)


import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './Layouts/App';


import {store} from './Store/configureStore'

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
    ,
  document.getElementById('root')
);
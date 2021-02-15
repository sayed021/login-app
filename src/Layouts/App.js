import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../Global/Theme';
import { GlobalStyles } from "../Global/Theme/GlobalStyle";
import TestPage from './testpage';
import {Login} from './PublicLayout';

import Routes from '../Routes';
import { Provider } from "react-redux";

import {store} from '../Store/configureStore'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={lightTheme } >
          <GlobalStyles />        
          <Routes />
          {/* <TestPage /> */}
      </ThemeProvider>
    </Provider>
  );
}

export default App;

import { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../Global/Theme';
import { GlobalStyles } from "../Global/Theme/GlobalStyle";
import TestPage from './testpage';
import {Login} from './PublicLayout';

function App() {
  return (
    <ThemeProvider theme={lightTheme } >
        <GlobalStyles />
        <Login />
        {/* <TestPage /> */}
    </ThemeProvider>
  );
}

export default App;

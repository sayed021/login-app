import { useState } from "react";

import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../Global/Theme';
import { GlobalStyles } from "../Global/Theme/GlobalStyle";
import TestPage from './testpage';
import {Login} from './PublicLayout';

import Routes from '../Routes';

function App() {
  return (
    <ThemeProvider theme={lightTheme } >
        <GlobalStyles />        
        <Routes />
        {/* <TestPage /> */}
    </ThemeProvider>
  );
}

export default App;

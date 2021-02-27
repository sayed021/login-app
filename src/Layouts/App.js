import { useEffect, useState } from "react";
import { connect } from "react-redux";
import { ThemeProvider } from "styled-components";
import { lightTheme, darkTheme } from '../Global/Theme';
import { GlobalStyles } from "../Global/Theme/GlobalStyle";
import Routes from '../Routes';


const App = props => {

  const [theme, settheme] = useState(localStorage.getItem('bdBookTheme'));

  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
      <ThemeProvider theme={theme == 'dark' ? darkTheme : lightTheme } >
          <GlobalStyles />        
          <Routes />
      </ThemeProvider>
  );
}


export default App;

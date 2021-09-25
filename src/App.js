import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import * as themes from './styles/themes';
import GlobalStyle from './styles/GlobalStyles';
import { ThemeContext } from './components/ThemeProvider';
import Routes from './routes';

function App() {
  const context = useContext(ThemeContext);
  const selectedTheme = context.colorMode || 'light';

  return (
    <ThemeProvider theme={themes[selectedTheme]}>
      <GlobalStyle />
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

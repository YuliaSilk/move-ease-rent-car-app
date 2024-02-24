import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { GlobalStyle } from 'components/GlobalStyles';
import { ThemeProvider } from 'styled-components';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


const theme = {
  colors: {
    main: '#3470FF',
    header: '#153834',
    backgraund: '#fff',
    active:'#c70e38',
    colorwerbs:'#121417',
    input:'#edb234',
    acent:'#0B44CD',
  },
  spacing: value => `${value*4}px`,
  radius: {
    m: '12px',
  },
}



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename='move-ease-rent-car-app'>
    <Provider >
    <PersistGate loading={null}>
    <ThemeProvider theme={theme}>
    <App />
    <GlobalStyle/>
    </ThemeProvider>
    </PersistGate>
    </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

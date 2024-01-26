import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import BommerTailsHeader from './components/structure/BommerTailsHeader';
import BommerContentPane from './components/structure/BommerContentPane';
import reportWebVitals from './reportWebVitals';
import { createGlobalStyle } from 'styled-components';
import { Provider } from 'react-redux';
import { store } from './store';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    outline:0;
    box-sizing:border-box;
    font-family: 'Inter', 'Open Sans', sans-serif;
    height: 100vh;
    background-color: #111;
    color: #fff;
  }
  #root{
    margin:0 auto;
    height: 100%;
  }
`

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <GlobalStyle />
          <BommerTailsHeader />
          <BommerContentPane />
      </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

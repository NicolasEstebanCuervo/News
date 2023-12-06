import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "bootstrap-icons/font/bootstrap-icons.css";
import { Global, css } from '@emotion/react';
import App from './App';
import { NewsProvider } from './Context/Context';

const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body{
    font-family: 'Montserrat', sans-serif;
  }
`;

ReactDOM.render(
  <NewsProvider>
    <Global styles={globalStyles} />
    <App />
  </NewsProvider>,
  document.getElementById('root')
);
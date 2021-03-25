import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { createGlobalStyle } from 'styled-components';
import reportWebVitals from './reportWebVitals';
import { Editor } from './pages/editor';
import { HashRouter as Router, Route, Redirect } from 'react-router-dom';
import { History } from './pages/history';

const GlobalStyle = createGlobalStyle`
  body * {
    box-sizing: border-box;
  }
`

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <Router>
      <Route exact path="/editor">
        <Editor />
      </Route>
      <Route exact path="/history">
        <History/>
      </Route>
      <Redirect to="/editor" path="*" />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

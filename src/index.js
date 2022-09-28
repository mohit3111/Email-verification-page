import React from 'react';
import ReactDOM from 'react-dom';
import Main from './components/Main';
import Verification from './components/Verification';
ReactDOM.render(
  <React.StrictMode>
   <Main/>
   <Verification/>
  </React.StrictMode>,
  document.getElementById('root')
);
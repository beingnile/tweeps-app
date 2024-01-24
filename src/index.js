import React from 'react';
import ReactDOM from 'react-dom';
import MyApp from './App';
import Home from './pages/Home';

ReactDOM.render(
  <React.StrictMode>
    <MyApp Component={Home} />
  </React.StrictMode>,
  document.getElementById('root')
);

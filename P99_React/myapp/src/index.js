import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import AntdTable from './view/AntdTable';
import LifeCycle from './view/LifeCycle';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
      <LifeCycle />
      {/*<App></App>*/}
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

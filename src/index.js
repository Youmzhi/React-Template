import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Route} from "react-router-dom";

import 'normalize.css';
import fastclick from 'fastclick';
import { routes  } from './router/index';
import { Provider } from 'react-redux';
import store from './redux/store'


fastclick.attach(document.body);


ReactDOM.render(
  // <React.StrictMode>
  <Provider store={store}>
    <Router>
      <Route path='/'>
        <App>
          {
            routes
          }
        </App>
      </Route>
    </Router>
  </Provider>,
  // </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

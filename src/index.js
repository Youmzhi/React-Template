import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";

// import Index from './pages/Index/index';
// import About from './pages/About/index';
import 'normalize.css';
import fastclick from 'fastclick';


fastclick.attach(document.body);

{/* <App /> */}

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function Messages(props) {
  return <h2>Messages {props.params.id}</h2>;
}

ReactDOM.render(
  <React.StrictMode>
    <Router>
      {/* <Route path='/'> */}
        {/* <App> */}
          <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/users">
              <Users />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        {/* </App> */}
        
      {/* </Route> */}
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import React from 'react'
import logo from './logo.svg';
import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// const App = React.createClass({
//   render() {
//     return (
//       <div>
//         <h1>App</h1>
//         <ul>
//           {/* <li><Link to="/about">About</Link></li>
//           <li><Link to="/inbox">Inbox</Link></li> */}
//         </ul>
//         {this.props.children}
//       </div>
//     )
//   }
// })




export default class App extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
         <h1>App</h1>
         <ul>
           {/* <li><Link to="/about">About</Link></li>
           <li><Link to="/inbox">Inbox</Link></li> */}
         </ul>
         {this.props.children}
      </div>
    )
  }
};

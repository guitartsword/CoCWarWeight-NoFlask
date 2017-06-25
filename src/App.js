import React, { Component } from 'react';
import {BrowserRouter as Router, 
  Route,
  Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import Contador from './miApp/Contador';

class App extends Component {
  render() {
    const home = () =>{
      return (
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to React</h2>
          </div>
          <p className="App-intro">
            To get started, edit <code>src/App.jsx</code> and save to reload.
          </p>
        </div>
      );
    }
    const Constante = () => (
      <h1>HOLA SOY CONSTANTE</h1>
    );
    return (
      <Router>
        <div>
          <Route exact path="/" component={home}></Route>
          <Route path="/ruta" component={Constante}></Route>
          <Route path="/contar/:item" component={Contador}></Route>
        </div>
      </Router>
    );
  }
}

export default App;

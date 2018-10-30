import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from './components/Form.js'

class App extends Component {
  render() {
    return (
      <div className="App">   
      <style>@import url('https://fonts.googleapis.com/css?family=Open+Sans');</style>
      <nav className="bar">
      <a href="" className="text-white">Welcome back!</a>
      </nav>
      <div className="container">
          <div className="row mt-4">

            <div className="col-md-4 text-center">
                <img src={logo} className="App-logo" alt="logo" />
                <h1 className = "h2">Login</h1>
              <Form/>
            </div>
          </div>
        </div>
        <footer classname="footer">
          <div> Franco Fuentes 2018 ©  / Programación de Negocios
          <br></br><a href="https://www.unicah.edu/#1"> UNICAH</a>
        </div>
        </footer>
      </div>
    );
  }
}

export default App;

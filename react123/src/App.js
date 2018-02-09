import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import swal from 'sweetalert';
import Table from './components/Table/Table';

class App extends Component {
  



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <Table />
      </div>
    );
  }
}

export default App;

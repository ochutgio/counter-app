import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Counter from '../src/component/counter';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Counter />
        </header>
      </div>
    );
  }
}
export default App;
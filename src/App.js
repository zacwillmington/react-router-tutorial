import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import NavBar from './components/NavBar';
import { Route } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <a
            className="App-link"
            href="https://www.zacwillmington.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
        <NavBar />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/About' component={AboutPage} />
        <Route exact path='/Contact' component={ContactPage} />
      </div>
    );
  }
}

export default App;

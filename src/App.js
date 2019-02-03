import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import HomePage from './components/HomePage';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';


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
        <HomePage />
        <AboutPage />
        <ContactPage />
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import './assets/css/App.css';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import Home from './components/homepage/Home';

class App extends Component {
  render() {
    return (
      <div className="App">
        <AppHeader/>
        <Home/>
        <AppFooter/>
      </div>
    );
  }
}

export default App;

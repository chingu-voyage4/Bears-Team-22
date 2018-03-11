import React, { Component } from 'react';

import JobAdd from './components/jobs/JobAdd'
import './assets/css/App.css';

import AppHeader from './components/app/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import Home from './components/homepage/Home';


class App extends Component {
  render() {
    return (
      <div className="App">

         <JobAdd/>

        <AppHeader/>
        <Home/>
        <AppFooter/>

      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
import JobAdd from './components/jobs/JobAdd'
import './assets/css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
         <JobAdd/>
      </div>
    );
  }
}

export default App;

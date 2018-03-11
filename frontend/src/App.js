import React, { Component } from 'react';

import { Route, withRouter, Switch } from 'react-router-dom';


import JobAdd from './components/jobs/JobAdd'
import './assets/css/App.css';


import AppHeader from './components/app/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import Home from './components/homepage/Home';
import Jobs from './components/jobs/Jobs';
import './assets/css/App.css';

// todo: pass this to redux?

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      headerClass: ''
    }

    // listen route changes to give the correct class to the header
    this.props.history.listen((location, action) => {
      this._checkRoute(location.pathname);
    })
  }

  render() {
    const { headerClass } = this.state;
    return (
      <div className="App">
        <AppHeader className={headerClass} />
        <Route exact path="/" component={Home} />
        {/* set your routes here and add the className="app-route" to the components*/}
        <Route exact path="/jobs" component={Jobs} />
        <Route path="/jobs/add" component={JobAdd} />

        <AppHeader />
        <AppFooter />

      </div>
    );
  }

  // this change the style of the header depending if it's the homepage
  _checkRoute(pathname) {
    const headerClass = pathname === '/' ? 'home' : '';
    this.setState({ headerClass: headerClass });
  }
}

export default withRouter(App);

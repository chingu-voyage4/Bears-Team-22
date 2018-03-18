import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, withRouter, Switch } from 'react-router-dom';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import homeRoutes from './routes/homeRoutes';
import './assets/css/App.css';

// todo: pass this to redux?

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headerClass: ''
    };
    const { history } = this.props;

    // listen route changes to give the correct class to the header
    history.listen(location => {
      this._checkRoute(location.pathname);
    });
  }

  render() {
    const { headerClass } = this.state;
    return (
      <div className="App">
        <AppHeader className={headerClass} />

        <Switch>
          {homeRoutes.map((route, index) => (
            <Route
              key={index}
              exact={route.exact}
              path={route.path}
              component={route.component}
            />
          ))}
        </Switch>

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

App.propTypes = {
  history: PropTypes.shape({}).isRequired
};

export default withRouter(App);

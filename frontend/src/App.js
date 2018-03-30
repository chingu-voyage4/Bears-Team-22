import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import AppHeader from './components/appHeader/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import homeRoutes from './routes/homeRoutes';
import './assets/css/App.css';
import { graphql } from "react-apollo";
import gql from "graphql-tag";


const currentUser = gql`
query currentUser {
  currentUser {
    id,
    email,
    accountType
  }
}
`
// todo: pass this to redux?

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      headerClass: '',
      headerVisible: true
    }

    // listen route changes to give the correct class to the header
    this.props.history.listen((location, action) => {
      this._checkRoute(location.pathname);
    })
  }

  componentDidMount() {
    this._checkRoute(window.location.pathname);
  }

  render() {
    const { headerClass, headerVisible } = this.state;
    const { data } = this.props;
    const { currentUser } = data;
    window.currentUser = currentUser; // pass to redux

    return (
      <div className="App">
        {headerVisible && (<AppHeader className={headerClass} />)}

        <Switch>
          {homeRoutes.map((route, index) => (
            <Route key={index} exact={route.exact} path={route.path} component={route.component} routes={route.routes} />
          ))}
        </Switch>

        {headerVisible && (<AppFooter />)}
      </div>
    );
  }

  // this change the style of the header depending if it's the homepage
  _checkRoute(pathname) {
    const headerClass = pathname === '/' ? 'home' : '';
    const noHeaderRoutes = ['/login', '/join'];
    this.setState((state) => ({ headerClass: headerClass, headerVisible: !(noHeaderRoutes.includes(pathname)) }));
  }
}

export default withRouter(graphql(currentUser, {
  currentUser: ({ data }) => data.currentUser
})(App));

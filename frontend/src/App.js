import React, { Component } from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import AppHeader from './components/app/AppHeader';
import AppFooter from './components/appFooter/AppFooter';
import homeRoutes from './routes/homeRoutes';
import './assets/css/App.css';
import '../node_modules/font-awesome/css/font-awesome.min.css'; 
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
    const { headerClass } = this.state;
    const currentUser = this.props.data.currentUser;
    if (currentUser) {
      window.currentUser = currentUser; // pass to redux
    }

    return (
      <div className="App">
        {this.state.headerVisible && (<AppHeader className={headerClass} />)}

        <TransitionGroup>
          <CSSTransition classNames="fade" timeout={300}>
            <Switch>
              { homeRoutes.map((route, index) => (
                <Route key={index} exact={route.exact} path={route.path} component={route.component} routes={route.routes}/>
              )) }
            </Switch>
          </CSSTransition>
        </TransitionGroup>

        {this.state.headerVisible && (<AppFooter/>)}
      </div>
    );
  }

  // this change the style of the header depending if it's the homepage
  _checkRoute(pathname) {
    const headerClass = pathname === '/' ? 'home' : '';
    const noHeaderRoutes = ['/login', '/join']
    window.scrollTo(0,0);
    this.setState((state) => ({ headerClass: headerClass, headerVisible: !(noHeaderRoutes.includes(pathname))}));
  }
}

export default withRouter(graphql(currentUser, {
  currentUser: ({ data }) => data.currentUser
})(App))

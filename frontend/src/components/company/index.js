import React, { Component } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import employerRoutes from './../../routes/employerRoutes'

class Company extends Component {
  render() {
    console.log(this.props)
    return (

      <div>
        <Switch>
          { employerRoutes.map((route, index) =>
            route.isPrivate ?
              (<PrivateRoute key={index} exact={route.exact} path={route.path} component={route.component}/>) :

              (<Route key={index} exact={route.exact} path={route.path} component={route.component}/>)
          )}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Company);

const PrivateRoute = ({ component: Component, ...attributes }) => (
  <Route {...attributes}
    render={ props => {
      return user.isCompany() ? (
        <Component {...props}/>
      ) : (
        <Redirect to={{ pathname: "/login", state: { from: props.location } }}/>
      )}
    }
  />
);

const user = {
  isCompany() {
    return false;
  },

  isUser() {
    return true;
  }
}



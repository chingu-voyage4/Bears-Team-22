import React, { Component } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import employeeRoutes from './../../routes/employeeRoutes'
import { withApollo, Query } from 'react-apollo'

class Employee extends Component {
  render() {
    const { data } = this.props.client.cache.data
    const { ROOT_QUERY } = data
    const currentUser =
      ROOT_QUERY && ROOT_QUERY.currentUser
        ? data[ROOT_QUERY.currentUser.id]
        : {}

    return (
      <div>
        <Switch>
          {employeeRoutes.map(
            (route, index) =>
              route.isPrivate ? (
                <PrivateRoute
                  key={index}
                  exact={route.exact}
                  path={route.path}
                  component={route.component}
                  data={currentUser}
                />
              ) : (
                  <Route
                    key={index}
                    exact={route.exact}
                    path={route.path}
                    component={route.component}
                  />
                )
          )}
        </Switch>
      </div>
    )
  }
}

export default withRouter(withApollo(Employee))

const PrivateRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={props => {
      return user.isEmployee(attributes) ? (
        <Component {...props} />
      ) : (
          <Redirect
            to={{ pathname: '/login', state: { from: props.location } }}
          />
        )
    }}
  />
)

const user = {
  isEmployee(props) {
    const account = props.data
    return account && account.accountType !== 'company'
  },

  isUser() {
    return true
  }
}

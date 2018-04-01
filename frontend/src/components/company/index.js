import React, { Component } from 'react'
import { Route, withRouter, Switch, Redirect } from 'react-router-dom'
import employerRoutes from './../../routes/employerRoutes'
import { withApollo, Query } from 'react-apollo'

class Company extends Component {
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
          {employerRoutes.map(
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

export default withRouter(withApollo(Company))

const PrivateRoute = ({ component: Component, ...attributes }) => (
  <Route
    {...attributes}
    render={props => {
      return user.isCompany(attributes) ? (
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
  isCompany(props) {
    const account = props.data
    return account && account.accountType == 'company'
  },

  isUser() {
    return true
  }
}

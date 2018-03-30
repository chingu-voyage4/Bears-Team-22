import React, { Component, Fragment } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link , withRouter } from 'react-router-dom';

// queries
import GET_CURRENT_USER from './../../graphql/getCurrentUser';

const doLogout = gql`
mutation {
  logout
}
`;

class Logout extends Component{
  render() {
    return(
      <a href="#" onClick={this.logout} className={this.props.className}> Log Out</a>
    )
  }

  logout = (e) => {
    e.preventDefault();
    this.props.mutate({
      update: ((cache) => {
        cache.writeQuery({
          Query: GET_CURRENT_USER,
          data: { currentUser: null }
        });
      })
    })
    .then(({ data }) => {
      const logout = data.logout;
      if (logout) {
        alert('Good Bye, hope to see you soon')
        this.props.history.push('/')
      }
    })
    .catch((err) => {
      console.log(err);
    });
  }
}

export default withRouter(graphql(doLogout)(Logout));
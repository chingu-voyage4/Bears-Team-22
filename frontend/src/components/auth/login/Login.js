import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link, withRouter } from 'react-router-dom';
import AppRedirect from './../../app/AppRedirect';
import './Login.css';

// queries
import GET_CURRENT_USER from './../../../graphql/getCurrentUser';

const doLogin = gql`
mutation login($email: String, $password: String){
  login(email: $email, password: $password) {
    id,
    email,
    accountType
  }
}
`;

class Login extends Component {
  state = {
    email: '',
    password: '',
    loading: false
  }

  render() {
    return (
      <div className="login-box">
        <div className="login-box__header">
          <h1 className="login-box__title"> Login</h1>
          <h3 className="login-box__info"> Welcome to App Name.</h3>
        </div>
        <div className="login-box__body">
          <form onSubmit={this._handleSubmit}>
            <input className="in-controls" required name="email" placeholder="Email" onChange={this._handleChange} />
            <input className="in-controls" required name="password" type="password" placeholder="password" onChange={this._handleChange} />

            <div className="login-box__links">
              <small><Link to="/login/forgot"> Forgot your password?</Link></small> <small><Link to="/"> Back to home</Link></small>
            </div>

            <input className="btn" type="submit" value="log in" onClick={this._handleSubmit} disabled={this.state.loading} />
            or
            <button className="btn" type="submit" onClick={this._handleSubmit}> Google </button>
            <button className="btn" type="submit" onClick={this._handleSubmit}> Facebook </button>
            <button className="btn" type="submit" onClick={this._handleSubmit}> Twitter </button>
          </form>
        </div>
      </div>
    )
  }

  _handleChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value })
  }

  _handleSubmit = (e) => {
    e.preventDefault()
    this.loadIndicator();
    const { email, password } = this.state;
    if (email && password) {
      this.login(email, password);
    } else {
      alert('llene las credenciales');
    }

  }

  loadIndicator = (isLoading = true) => {
    this.setState({ loading: isLoading })
  }

  login = (email, password) => {
    this.props.mutate({
      variables: { email, password },

      refetchQueries: [{
        query: GET_CURRENT_USER,
      }],

      update: ((cache, { data: { login } }) => {
        const { currentUser } = cache.readQuery({ query: GET_CURRENT_USER });
        cache.writeQuery({
          data: { GET_CURRENT_USER, currentUser: login }
        });
        const currentUser2 = cache.readQuery({ query: GET_CURRENT_USER }).currentUser;
        console.log(currentUser2)

      })
    })

      .then(({ data }) => {
        this.loadIndicator(false);
        const currentUser = data.login;
        if (currentUser) {
          const { email, accountType } = currentUser;
          const redirection = accountType || 'employee';
          alert(`Welcome ${email} you are a ${accountType}`);
          setTimeout(() => {
            this.props.history.push(`/${redirection}`)
          }, 200);
        }
      })
      .catch((err) => {
        console.log(err.toString());
        this.loadIndicator(false);
      });
  }
}

export default withRouter(graphql(doLogin)(Login));
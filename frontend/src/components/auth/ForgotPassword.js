import React, { Component, Fragment } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link } from 'react-router-dom';

const doLogin = gql`
mutation forgotPassword($email: String){
  forgotPassword(email: $email)
}
`;

class ForgotPassword extends Component{
  state = {
    email: '',
    loading: false
  }

  render() {
    return(
      <div className="login-box">
        <div className="login-box__header">
          <h1 className="login-box__title"> Reset Password</h1>
          <h3 className="login-box__info"> We'll send you a link </h3>
        </div>
        <div className="login-box__body">
          <form onSubmit={this._handleSubmit}>
            <input className="in-controls" name="email" placeholder="Email" onChange={this._handleChange}/>

            <div className="login-box__links">
              <small><Link to="/login"> Login </Link></small> <small><Link to="/"> Back to home</Link></small>
            </div>

            <input className="btn"type="submit" value="Get A Link" onClick={this._handleSubmit} disabled={this.state.loading}/>
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
    const { email } = this.state;

    if (email) {
      this.forgotPassword(email)
    } else {
      // TODO: change for sweetalert2
      alert('llene los datos')
    }
  }

  loadIndicator = (isLoading = true) => {
    this.setState({ loading: isLoading })
  }

  forgotPassword = (email) => {
    this.props.mutate({
      variables: { email }
    })
    .then(({ data }) => {
      this.loadIndicator(false)
      console.log(data)
    })
    .catch((err) => {
      alert(err.toString());
      this.loadIndicator(false);
    });
  }
}

export default graphql(doLogin)(ForgotPassword);
import React, { Component } from 'react';
import { graphql } from "react-apollo";
import gql from "graphql-tag";
import { Link , withRouter } from 'react-router-dom';
import GET_CURRENT_USER from './../../graphql/getCurrentUser';

const doRegistration = gql`
mutation registerAccount($email: String, $password: String, $fullname: String, $accountType: String) {
  registerAccount(email: $email, password: $password, fullname: $fullname, accountType: $accountType) {
    id,
    email,
    fullname
    accountType
  }
}
`;

class Registration extends Component {
  state = {
    email: '',
    password: '',
    fullName: '',
    accountType: '',
    accountTypes: ['employee', 'company'],
    confirmPassword: '',
    loading: false
  }

  render() {
    const { accountTypes, loading } = this.state;
    return (
      <div className="login-box">
        <div className="login-box__header">
          <h1 className="login-box__title"> Sign Up</h1>
          <h3 className="login-box__info"> Get Your Account </h3>
        </div>
        <div className="login-box__body">
          <form onSubmit={this._handleSubmit}>
            <input className="in-controls" required name="email" placeholder="Email" onChange={this._handleChange}/>
            <input className="in-controls" required name="password" type="password" placeholder="password" onChange={this._handleChange}/>
            <input className="in-controls" required name="confirmPassword" type="password" placeholder="confirm password" onChange={this._handleChange}/>
            <select className="in-controls" required name="accountType" onChange={this._handleChange}>
              {(accountTypes.map((type) => <option value={type}> {type} </option>))}
            </select>

            <div className="login-box__links">
              <small><Link to="/login"> Login </Link></small> <small><Link to="/"> Back to home</Link></small>
            </div>

            <input className="btn" type="submit" value="Sign Up" onClick={this._handleSubmit} disabled={this.state.loading}/>
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
    const { email, password, accountType, confirmPassword, fullName } = this.state;
    if (!(email && password && confirmPassword)) {
      alert('fulfill the credentials');
    } else if (password != confirmPassword ){
      alert('the password dont match');
    } else {
      this.registration(email, password, accountType, fullName);
    }
  }

  loadIndicator = (isLoading = true) => {
    this.setState({ loading: isLoading })
  }

  registration = (email, password, accountType, fullname) => {
    this.props.mutate({
      variables: { email, password, accountType, fullname },
      credentials: 'include',
      refetchQueries: [{
        query: GET_CURRENT_USER,
      }],
    })
    .then(({ data }) => {
      this.loadIndicator(false);
      const currentUser = data.registerAccount;
      if (currentUser) {
        window.currentUser = currentUser; // TODO: pass to redux Jesus
        const { email, accountType } = currentUser;
        const redirection = accountType || 'employee';
        setTimeout(() => {
          this.props.history.push(`/${redirection}`)
        }, 200);

      }
    })
    .catch((err) => {
      alert(err.toString());
      this.loadIndicator(false);
    });
  }
}

export default withRouter(graphql(doRegistration)(Registration));
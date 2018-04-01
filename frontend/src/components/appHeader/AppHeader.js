import React, { Component, Fragment } from 'react';
import { router, NavLink, Link } from 'react-router-dom';
import { withApollo } from 'react-apollo';
import { Cache } from 'apollo-cache';
import placeholder from './../../assets/img/placeholder.jpg';
import Logout from './../auth/Logout';
import './AppHeader.css';

class AppHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuExpanded: false,
      headerClass: 'app-header',
      profileExpanded: false
    };
    this._scrollHeader();
  }

  render() {
    const { client, className } = this.props;
    const { data } = client.cache.data;
    const { headerClass } = this.state;
    const { ROOT_QUERY } = data;
    const currentUser = (ROOT_QUERY && ROOT_QUERY.currentUser) ? data[ROOT_QUERY.currentUser.id] : null;

    return (
      <header className={`${headerClass} ${className}`}>
        <button className="menu-toggle" onClick={this._toggleMenu}>
          <i className="material-icons"> menu</i>
        </button>

        <div className="brand">
          <h1 className="brand-name title"><Link className="brand-name title" to="/"> App Name</Link></h1>
        </div>

        {!currentUser &&
          (<nav className="menu mobile-nav">
            <li><a href="/login" className="menu-buttons">Login</a></li>
          </nav>)
        }


        <nav className={this._menuTriggerClass()}>
          {currentUser ?
            this.getAccountMenu(currentUser.accountType, currentUser)
            :
            (<Fragment>
              <li><NavLink to="/" className="menu-buttons">Home</NavLink></li>
              <li><NavLink to="/jobs" className="menu-buttons">Jobs</NavLink></li>
              <li><NavLink to="/login" className="menu-buttons">Login</NavLink></li>
              <li><NavLink to="/join" className="menu-buttons">Join</NavLink></li>
              <li><Link to="/company" className="menu-buttons btn-remark">Company</Link></li>
            </Fragment>
            )
          }
        </nav>

        <nav className="profile-menu">
          {currentUser && this.profileMenu(currentUser)}
        </nav>
      </header>
    )
  }

  getAccountMenu = (type, currentUser) => {
    return (type === 'company') ? this.companyMenu(currentUser) : this.employeeMenu(currentUser);
  }

  companyMenu = (currentUser) => {
    return (
      <Fragment>
        <li><NavLink to="/" className="menu-buttons">Candidates</NavLink></li>
        <li><NavLink to="/jobs" className="menu-buttons">My Posts</NavLink></li>
        <li><NavLink to="/login" className="menu-buttons">Saved Candidates</NavLink></li>
      </Fragment>
    );
  }

  employeeMenu = (currentUser) => {
    return (
      <Fragment>
        <li><NavLink to="/" className="menu-buttons">Find Jobs</NavLink></li>
        <li><NavLink to="/jobs" className="menu-buttons">Saved Jobs</NavLink></li>
        <li><NavLink to="/login" className="menu-buttons">My Applications</NavLink></li>
      </Fragment>
    );
  }

  profileMenu = (currentUser) => {
    const picture = currentUser.picture || placeholder;
    return (
      <Fragment>
        <li><NavLink to="/company/notifications" className="menu-buttons"><i className="material-icons">notifications</i></NavLink></li>
        <li><NavLink to="/company/messages" className="menu-buttons"><i className="material-icons">message</i></NavLink></li>
        <li className={this._profileTriggerClass()}><a className="dropdown menu-buttons" onClick={this._toggleProfile}>
          <img src={picture} className="profile-picture" />
        </a>
          <ul className="submenu">
            <li><a className="menu-buttons">{currentUser.email}</a></li>
            <li><NavLink to="/employee/profile" className="menu-buttons">My Profile</NavLink></li>
            <li><NavLink to="/company/messages" className="menu-buttons">Preferences</NavLink></li>
            <li><Logout className="menu-buttons" /></li>
          </ul>
        </li>
      </Fragment>
    );
  }

  _menuTriggerClass = () => {
    const { menuExpanded } = this.state;
    const expanded = (menuExpanded) ? 'expanded' : '';
    return `menu mobile ${expanded}`;
  }

  _profileTriggerClass = () => {
    const { profileExpanded } = this.state;
    return (profileExpanded) ? 'expanded' : '';
  }

  _toggleMenu = () => {
    this.setState({ menuExpanded: !this.state.menuExpanded })
  }

  _toggleProfile = (hide) => {
    this.setState({ profileExpanded: !this.state.profileExpanded });
  }

  _scrollHeader = () => {
    window.addEventListener('scroll', (e) => {
      const top = window.scrollY;
      const headerClass = (top > 70) ? 'app-header scrolled' : 'app-header';
      this.setState({ headerClass });
    })
  }
}

export default withApollo(AppHeader);
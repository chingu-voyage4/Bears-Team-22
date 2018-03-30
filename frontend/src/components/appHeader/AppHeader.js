import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom'
import './AppHeader.css';

export default class AppHeader extends Component {
	constructor(props) {
		super(props);
		this.state = {
			menuExpanded: false,
			headerClass: 'app-header'
		};
		this._scrollHeader();
	}

	render() {
		return (
			<header className={`${this.state.headerClass} ${this.props.className}`}>
				<button className="menu-toggle" onClick={this._toggleMenu}>
					<i className="material-icons"> menu</i>
				</button>

				<div className="brand">
					<h1 className="brand-name title"> App Name</h1>
				</div>

				<nav className="menu mobile-nav">
					<li><a href="/link" className="menu-buttons">Login</a></li>
				</nav>

				<nav className={this._menuTriggerClass()}>
					<li><NavLink to="/" className="menu-buttons">Home</NavLink></li>
					<li><NavLink to="/jobs" className="menu-buttons">Jobs</NavLink></li>
					<li><NavLink to="/login" className="menu-buttons">Login</NavLink></li>
					<li><NavLink to="/join" className="menu-buttons">Join</NavLink></li>
					<li><Link to="/company" className="menu-buttons btn-remark">Company</Link></li>
				</nav>
			</header>
		)
	}


	_menuTriggerClass = () => {
		const { menuExpanded } = this.state;
		const expanded = (menuExpanded) ? 'expanded' : '';
		return `menu mobile ${expanded}`;
	}

	_toggleMenu = () => {
		this.setState({ menuExpanded: !this.state.menuExpanded })
	}

	_scrollHeader = () => {
		window.addEventListener('scroll', (e) => {
			const top = window.scrollY;
			const headerClass = (top > 70) ? 'app-header scrolled' : 'app-header';
			this.setState({ headerClass });
		})
	}
}
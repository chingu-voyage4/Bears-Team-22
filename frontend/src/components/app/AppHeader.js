import React, { Component } from 'react';
import './AppHeader.css';

export default class AppHeader extends Component {
	constructor(props) {
		super(props);
		this._scrollHeader();
	}

	state = {
		menuExpanded: false,
		headerClass: 'app-header'
	}

  render() {
		return(
			<header className={this.state.headerClass}>
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
					<li><a href="/" className="menu-buttons">Home</a></li>
					<li><a href="/link" className="menu-buttons">Login</a></li>
					<li><a href="/link" className="menu-buttons">Join</a></li>
					<li><a href="/link" className="menu-buttons btn-remark">Company</a></li>
				</nav>
			</header>
		)
	}

	_menuTriggerClass = () => {
		const {menuExpanded} = this.state;
		const expanded = (menuExpanded) ? 'expanded' : '';
		return `menu mobile ${expanded}`;
	}

	_appHeaderClass = () => {
		const {headerScrolled} = this.state;
		const scrolled = (headerScrolled) ? 'scrolled' : '';
		alert(scrolled)
		return `app-header ${scrolled}`;
	}

	_toggleMenu = () => {
		this.setState({ menuExpanded: !this.state.menuExpanded})
	}

	_scrollHeader = () => {
		window.addEventListener('scroll', (e) => {
			const top = window.scrollY;
			const headerClass = (top > 70) ? 'app-header scrolled' : 'app-header';
			this.setState({ headerClass });
		})
	}
}
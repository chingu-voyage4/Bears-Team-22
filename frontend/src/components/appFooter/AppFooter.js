import React from 'react';
import HomeMenuList from './../homepage/components/HomeMenuList';
import './AppFooter.css';

const AppFooter = () => {
	return (
		<footer className="app-footer">
			<div className="row-container">
				<HomeMenuList
					title="For Talent"
					showSubtitle={false}
					links={forTalents}
					classToAdd="press" />
				<HomeMenuList
					title="For Companies"
					showSubtitle={false}
					links={forCompanies}
					classToAdd="press" />
				<HomeMenuList
					title="Follow us"
					showSubtitle={false}
					links={networks}
					classToAdd="press" />
			</div>

			<div className="footer__base">
				<span className="footer__left-info">
					by Team Bears 22 of chingu voyage-4
					</span>
				<span className="footer__right-info">
					Build-to-learn
					</span>
			</div>

		</footer>
	)
}

export default AppFooter;

const forTalents = [
	{ href: '/', title: 'Home' },
	{ href: '/', title: 'Find Jobs' },
	{ href: '/', title: 'Join' },
]

const forCompanies = [
	{ href: '/', title: 'What we offer' },
	{ href: '/', title: 'Pricing' },
	{ href: '/', title: 'Testimonials' },
]

const networks = [
	{ href: '/', title: 'Facebook' },
	{ href: '/', title: 'Twitter' },
	{ href: '/', title: 'LinkedIn' },
	{ href: '/', title: 'Google +' },
	{ href: '/', title: 'Instagram' }
]
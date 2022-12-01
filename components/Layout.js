import React from 'react';
import Footer from './Footer';
import Header from './head/Header';
import styles from '../styles/Layout.module.css'

const Layout = ({ children }) => {
	return (
		<div>
			<Header />
			{children}
			<Footer />
		</div>
	);
};

export default Layout;
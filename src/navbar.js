import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'
import NavButtons from './navbuttons'
import './navbar.css';

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	render(props) {



		return (
			<AppBar position="static" color="primary">
				<Toolbar>
						
						<NavButtons  isLoggedIn={this.props.isLoggedIn} admin={this.props.admin} enableAdmin={this.props.enableAdmin} showSideBar={this.props.showSideBar} />
						<LoginScreen nameHandler={this.props.handleUsername} />
				</Toolbar>
			</AppBar>
		);

	}
}

export default NavBar;

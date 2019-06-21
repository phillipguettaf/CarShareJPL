import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
import Build from '@material-ui/icons/Build';
import ArrowBack from '@material-ui/icons/ArrowBack';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import LoginScreen from './LoginScreen'
import './navbar.css';

class NavBar extends Component {

	constructor(props) {
		super(props);
	}

	showSideBar() {
		return this.props.showSideBar();
	}

	render(props) {

		let icon;
		if (this.props.admin)
			icon = <ArrowBack />;
		else
			icon = <Build />;

		if (this.props.isLoggedIn)
		{
			return (
				<AppBar position="static" color="primary">
					<Toolbar>
							
							<Button onClick={() => this.showSideBar()}>
								<Menu/>
							</Button>
							<Button onClick={() => this.props.enableAdmin()}>
								{icon}
							</Button>
							<LoginScreen nameHandler={this.props.handleUsername} />
					</Toolbar>
				</AppBar>
			);
		}
		else
		{
			return (
				<AppBar position="static" color="primary">
					<Toolbar>
							<LoginScreen nameHandler={this.props.handleUsername} />
					</Toolbar>
				</AppBar>
			);
		}

	}
}

export default NavBar;

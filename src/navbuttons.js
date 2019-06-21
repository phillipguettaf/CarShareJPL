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

class NavButtons extends Component {

	constructor(props) {
		super(props);
	}

	render(props) {
		
		// If the user is in the admin section, render a back arrow
		// otherwise render the icon for the admin section
		let icon;
		if (this.props.admin)
			icon = <ArrowBack />;
		else
			icon = <Build />;

		
		// Hide the buttons for users that aren't logged in yet
		if (this.props.isLoggedIn)
		{
			return(
			<div>
				<Button onClick={() => this.props.showSideBar()}>
					<Menu/>
				</Button>
				<Button onClick={() => this.props.enableAdmin()}>
					{icon}
				</Button>
			</div>
			);
		}
		else
			return(<div />);

	}
}

export default NavButtons;

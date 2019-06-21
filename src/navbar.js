import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/IconButton';
import Menu from '@material-ui/icons/Menu';
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
		return (
			<AppBar position="static" color="primary">
		    	<Toolbar>
			  		<Button onClick={() => this.showSideBar()}>
			  			<Menu/>
			  		</Button>
            <Button>
		  		<Link to='/admin'>AdminConsole</Link>
		  	</Button>
                    <LoginScreen nameHandler={this.props.handleUsername} />
                </Toolbar>
			</AppBar>
		);
	}
}

export default NavBar;

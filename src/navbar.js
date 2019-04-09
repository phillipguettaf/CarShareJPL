import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

function NavBar(props) {
	return (
	<AppBar position="static" color="#3d3d3d">
	    <Toolbar>
		  	<Button>
		  		<Link to='/splash'>Home</Link>
		  	</Button>
		    <Button>
		  		<Link to='/map'>Map</Link>
		  	</Button>
	    </Toolbar>
	</AppBar>
	);
}

export default NavBar;
import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

function NavBar(props) {
	return (
	<AppBar position="static" color="#3d3d3d">
	    <Toolbar>
		  	<Button>
		  		<Link to='/splash'><HomeIcon/></Link>
		  	</Button>
		    <Button>
		  		<Link to='/map'><img src="./map.svg"></img></Link>
		  	</Button>
	    </Toolbar>
	</AppBar>
	);
}

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

export default NavBar;
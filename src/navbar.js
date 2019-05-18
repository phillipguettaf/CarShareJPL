import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SvgIcon from '@material-ui/core/SvgIcon';

function NavBar(props) {
	return (
	<AppBar position="static" color="primary">
	    <Toolbar>
		  	<Button>
		  		<Link to='/splash'><HomeIcon/></Link>
		  	</Button>
		    <Button>
		  		<Link to='/map'><MapIcon/></Link>
		  	</Button>
				<Button>
		  		<Link to='/admin'><MapIcon/></Link>
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

//	This is an icon because React apparently doesn't like images being passed as icons which is rude
function MapIcon(props) {
	return (
	<SvgIcon {...props}>
		<path d="M12 10.9c-.61 0-1.1.49-1.1 1.1s.49 1.1 1.1 1.1c.61 0 1.1-.49 1.1-1.1s-.49-1.1-1.1-1.1zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm2.19 12.19L6 18l3.81-8.19L18 6l-3.81 8.19z"/><path d="M0 0h24v24H0z" fill="none"/>
	</SvgIcon>
	);
}

export default NavBar;
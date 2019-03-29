import React, { Component } from 'react';
import './App.css';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap'


class Header extends Component
{
	state = {
		response: '',
		post: '',
		responseToPost: '',
	};

	constructor()
	{
		super()
	}


	render(props)
	{
		return (

			<div className="Header">
				<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
	  			integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
	  			crossorigin="anonymous" />

				<Navbar bg="dark" expand="lg" variant="light" sticky="top">
					<Navbar.Brand>JPL Car Share</Navbar.Brand>
					<Navbar.Toggle aria-controls="basic-navbar-nav" />
					<Navbar.Collapse id="basic-navbar-nav">
						<Nav className="mr-auto">
							<Nav.Link><Link to="/splash">Home</Link></Nav.Link>
							<Nav.Link><Link to="/map">Maps</Link></Nav.Link>
							<NavDropdown title="Dropdown" id="basic-nav-dropdown">
								<NavDropdown.Item><Link to="/map">Maps</Link></NavDropdown.Item>
								<NavDropdown.Item><Link to="/splash">Home (SplashScreen)</Link></NavDropdown.Item>
								<NavDropdown.Divider />
								<NavDropdown.Item>Separated link</NavDropdown.Item>
							</NavDropdown>
						</Nav>
						<Form inline>
							<FormControl type="text" placeholder="Search" className="mr-sm-2" />
							<Button variant="outline-success">Search</Button>
						</Form>
					</Navbar.Collapse>
				</Navbar>



			</div>
		);
	}
}

export default Header;

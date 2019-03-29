import React, { Component } from 'react';
import './App.css';


import { BrowserRouter as Router, Route, Link } from 'react-router-dom';


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
				<h1> This is the Header </h1>
				<ul>
					<li>
						<Link to="/splash">Home (SplashScreen)</Link>
					</li>
					<li>
						<Link to="/map">Maps</Link>
					</li>
				</ul>
			</div>
		);
	}
}

export default Header;

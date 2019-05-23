import React, { Component } from 'react';
import './App.css';
import LoginScreen from './LoginScreen'

class SplashScreen extends Component
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
			<div className="SplashScreen">
				<h1> HOWDY </h1>
				<LoginScreen />
			</div>
		);
	}
}

export default SplashScreen;

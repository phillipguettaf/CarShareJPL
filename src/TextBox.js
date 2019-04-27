import React, { Component } from 'react';
import './App.css';
import {callApi} from './apiActions'


class TextBox extends Component
{
	// Basic state
	state = {
		response: 'pre-api',
	};

	constructor()
	{
		super();
		// THIS IS SUPER IMPORTANT
		// Required to make sure the callback function is using the right `this` and can access stae
		this.testCallback = this.testCallback.bind(this);
	}

	// Basic callback function, sets state data with JSON from the Node server
	testCallback(res)
	{
		console.log(res);
		this.setState({
			response: res[0].model
		});

	}

	// Run this code when the component mounts
	componentDidMount() 
	{
		// Setup a basic JSON opject to POST to the node server
		const testData = {
			test: "test"
		}

		// Make our call to the API
        	callApi('getcars', testData, this.testCallback);
	}

	render(props)
	{
		return (
			<div className="TextBox">
			</div>
		);
				//<h1>{this.state.response}</h1> // Removed to clean up
	}
}

export default TextBox;

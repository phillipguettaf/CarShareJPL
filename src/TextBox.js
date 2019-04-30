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
			response: res.test
		});

	}

	// Run this code when the component mounrs
	componentDidMount() 
	{
		// Setup a basic JSON opject to POST to the node server
		const testData = {
			test: "test"
		}

		// Make our call to the API
        	callApi('test', testData, this.testCallback);
	}

	render(props)
	{
		return (
			<div className="TextBox">
				<h1>{this.state.response}</h1>
			</div>
		);
	}
}

export default TextBox;

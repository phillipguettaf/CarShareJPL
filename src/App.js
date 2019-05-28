import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import MapApp from './MapApp'
import TextBox from './TextBox'
import Header from './Header'
import SplashScreen from './SplashScreen'
import NavBar from './navbar'
import HttpsRedirect from 'react-https-redirect'

class App extends Component {

constructor()
{
	super();
	this.handleUsername = this.handleUsername.bind(this);

	var user = JSON.parse(localStorage.getItem('userstate'))
	console.log(localStorage)
	if (user)
	{
		console.log("Found user in localstorage already: "+user.name)
		this.state = { userName: user.name }
	}

}

  state = {
    response: '',
    post: '',
    responseToPost: '',
    userName: ''
  };



handleUsername(data)
{
	this.setState({
		userName: data
	});
}

  render()
  {
	if (this.state.userName)
	{
	    return (
		<HttpsRedirect>
			<div className="App">
				<Router>
					<NavBar handleUsername={this.handleUsername} />
					<MapApp/>
				</Router>
			</div>
		</HttpsRedirect>
	    );
    	}
	else
	{
		return (
			<HttpsRedirect>
				<div className='App'>
				<Router>
					<NavBar handleUsername={this.handleUsername} />
					<SplashScreen/>
				</Router>
				</div>
			</HttpsRedirect>
		);
	}
  }
}

export default App;

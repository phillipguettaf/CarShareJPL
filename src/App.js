import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import MapApp from './MapApp'
import TextBox from './TextBox'
import Header from './Header'
import SplashScreen from './SplashScreen'
import NavBar from './navbar'

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
	      <div className="App">
	      <Router>
	          <NavBar handleUsername={this.handleUsername} />
	          <MapApp/>
	      </Router>
	      </div>
	    );
    	}
	else
	{
		return (
			<div className='App'>
			<Router>
				<NavBar handleUsername={this.handleUsername} />
				<h1>Welcome to JPL Car Share</h1>
				<br/>
				<h2>Driving Innovation</h2>
			</Router>
			</div>
		)
	}
  }
}

export default App;

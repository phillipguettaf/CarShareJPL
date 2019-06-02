import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import MapApp from './MapApp'
import Admin from './Admin'
import TextBox from './TextBox'
import Header from './Header'
import NavBar from './navbar'
import SplashScreen from './SplashScreen'
import { HttpsRedirect } from 'react-https-redirect';

class App extends Component {
  
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
		this.handleUsername = this.handleUsername.bind(this);
		var user = JSON.parse(localStorage.getItem('userstate'))
		console.log(localStorage)
		this.showSideBar = this.showSideBar.bind(this);
		this.hideSideBar = this.hideSideBar.bind(this);
		if (user) {
			console.log("Found user in localstorage already: "+user.name)
			this.state = { userName: user.name, userEmail: user.email, sideBarShown: false };
		}
	}

	showSideBar() {
		this.setState({
			sideBarShown: true
		});
	}
    
    hideSideBar() {
        this.setState({
            sideBarShown: false
        });
    }

  handleUsername(data) {
    this.setState({
      userName: data.name,
      userEmail: data.email
    });
  }

    render() {
        if (this.state.userName) {
            return (
                
                  <div className="App">
                      <Router>
                          <NavBar showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                          <MapApp sideBarShown={this.state.sideBarShown} hideSideBar={this.hideSideBar} user={this.state.userEmail}/>
                      </Router>
                  </div>
                
            );
        } else {
            return (
              
                    <div className="App">
                        <Router>
                        <NavBar showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                        <SplashScreen />
                      </Router>
                    </div>
               
            );
        }
    }
}
export default App;

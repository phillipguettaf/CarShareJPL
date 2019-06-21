import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import Admin from './Admin'
import TextBox from './TextBox'
import NavBar from './navbar'
import SplashScreen from './SplashScreen'
import MapApp from './MapApp'
import { HttpsRedirect } from 'react-https-redirect';

class App extends Component {

	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
        this.handleUsername = this.handleUsername.bind(this);
        this.enable_admin = this.enable_admin.bind(this);
		var user = JSON.parse(localStorage.getItem('userstate'))
		console.log(localStorage)
		this.showSideBar = this.showSideBar.bind(this);
		this.hideSideBar = this.hideSideBar.bind(this);
		if (user) {
			console.log("Found user in localstorage already: "+user.name)
			this.state = { userName: user.name, userEmail: user.email, sideBarShown: false, admin: false };
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

    enable_admin()
    {
        let out;
        if (this.state.admin)
            out = false;
        else
            out = true;
        this.setState({
            admin: out
        });
    }


    // TODO: Tidy
    render() {

        // Check what to render based off if the user is logged in or not
        if (this.state.userName) {
            // Render the admin page if requested
            if (this.state.admin)
            {
                return (

                    <div className="App">
                        <Router>
                            <NavBar isLoggedIn={this.state.userName} admin={this.state.admin} enableAdmin={this.enable_admin} showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                            <Admin/>
                        </Router>
                    </div>
            	);
            }
            // Otherwise render the map page
            else
            {
                return (

                    <div className="App">
                        <Router>
                            <NavBar isLoggedIn={this.state.userName} admin={this.state.admin} enableAdmin={this.enable_admin} showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                            <MapApp loggedIn={true} admin={this.state.admin} sideBarShown={this.state.sideBarShown} hideSideBar={this.hideSideBar} user={this.state.userEmail}/>
                        </Router>
                    </div>

                );
            }
        // If the user's not logged in, just give them the splash screen
        } else {
            return (
                    <div className="App">
                        <Router>
                            <NavBar isLoggedIn={this.state.userName} admin={this.state.admin} enableAdmin={this.enable_admin} showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                        <SplashScreen />
                      </Router>
                    </div>

            );
        }
    }
}
export default App;

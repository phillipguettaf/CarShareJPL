import React, { Component } from 'react';
import './App.css';
import MapApp from './MapApp';
import BookingModal from './BookingModal';
import { Pane, toaster } from 'evergreen-ui';
import { callApi } from './apiActions'
import NavBar from './navbar'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';
import HttpsRedirect from 'react-https-redirect'

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
	  	this.state = { userName: user.name, sideBarShown: false };	
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
      userName: data
    });
  }

  render() {
	  if (this.state.userName) {
	    return (
        <HttpsRedirect>
	      <div className="App">
	      <Router>
	          <NavBar showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
	          <MapApp sideBarShown={this.state.sideBarShown} hideSideBar={this.hideSideBar}/>
	      </Router>
	      </div>
        </HttpsRedirect>
	    );
    } else {
        return (
          <HttpsRedirect>
            <div className='App'>
                <Router>
                    <NavBar showSideBar={this.showSideBar} handleUsername={this.handleUsername} />
                    <h1>Welcome to JPL Car Share</h1>
                    <br/>
                    <h2>Driving Innovation</h2>
                </Router>
            </div>
          </HttpsRedirect>
        );
        }
    }
}
export default App;


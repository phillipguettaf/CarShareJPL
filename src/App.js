import React, { Component } from 'react';
import './App.css';
import MapApp from './MapApp';
import BookingModal from './BookingModal';
import { Pane, toaster } from 'evergreen-ui';
import { callApi } from './apiActions'
import NavBar from './navbar'
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			sideBarShown: false,
		};
		this.showSideBar = this.showSideBar.bind(this);
        this.hideSideBar = this.hideSideBar.bind(this);
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

	render(props) {
			return (
				<Router>	
					<Pane>
						<NavBar showSideBar={this.showSideBar}/>
						<MapApp sideBarShown={this.state.sideBarShown} hideSideBar={this.hideSideBar}/>
					</Pane>
				</Router>
			);
	}
}
export default App;


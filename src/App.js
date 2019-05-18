import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import MapApp from './MapApp'
import Admin from './Admin'
import TextBox from './TextBox'
import Header from './Header'
import SplashScreen from './SplashScreen'
import NavBar from './navbar'

class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
  };


  render() {
    return (
      <div className="App">

        <Router>
          <NavBar/>
          <TextBox/>
          <Route path='/map' component={MapApp} />
          <Route path='/admin' component={Admin} />

          <Route exact path="/" component={() => <Redirect to="/map" />}/>
        </Router>
      </div>
    );
  }
}

export default App;

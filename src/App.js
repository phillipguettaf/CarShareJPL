import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Redirect} from 'react-router-dom';

import JPLMap from './JPLMap'
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
          <Route path='/splash' component={SplashScreen} />
          <Route path='/map' component={JPLMap} />

          <Route exact path="/" component={() => <Redirect to="/splash" />}/>
        </Router>
      </div>
    );
  }
}

export default App;

import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

import { ReactBingmaps } from 'react-bingmaps';
import 'react-geolocation';

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import JPLMap from './JPLMap'


class App extends Component {
  state = {
    response: '',
    post: '',
    responseToPost: '',
    latitude: null,
    longitude: null,
    error: null,
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }
  callApi = async () => {
    const response = await fetch('/test');
    const body = await response.json();
    if (response.status !== 200) throw Error(body.message);
    return body;
  };
  handleSubmit = async e => {
    e.preventDefault();
    const response = await fetch('/test', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ post: this.state.post }),
    });
    const body = await response.text();
    this.setState({ responseToPost: body });
  };

componentDidMount() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      this.setState({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
        error: null,
      });
    },
    (error) => this.setState({error: error.message}),
    { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
  );
}

render() {
    return (

      <div className="App">
        <p>{this.state.response}</p>
        <form onSubmit={this.handleSubmit}>
          <p>
            <strong>Post to Server:</strong>
          </p>
          <p>
            Latitude: {this.state.latitude}
          </p>
          <p>
            Longitude: {this.state.longitude}
          </p>

          <input
            type="text"
            value={this.state.post}
            onChange={e => this.setState({ post: e.target.value })}
          />
          <button type="submit">Submit</button>
        </form>
        <p>{this.state.responseToPost}</p>
		<JPLMap lat={this.state.latitude} long={this.state.longitude} />
      </div>
    );
  }
}

export default App;

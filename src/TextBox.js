import React, { Component } from 'react';
import './App.css';


class TextBox extends Component
{
	state = {
		response: '',
		post: '',
		responseToPost: '',
	};

	constructor()
	{
		super()
	}

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

	render(props)
	{
		return (
			<div className="TextBox">
				<p>{this.state.response}</p>
				<form onSubmit={this.handleSubmit}>
				  <p>
				    <strong>Post to Server:</strong>
				  </p>
				  <input
				    type="text"
				    value={this.state.post}
				    onChange={e => this.setState({ post: e.target.value })}
				  />
				  <button type="submit">Submit</button>
				</form>
				<p>{this.state.responseToPost}</p>
			</div>
		);
	}
}

export default TextBox;

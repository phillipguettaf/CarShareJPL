import React, { Component } from 'react';
import './App.css';

import { ReactBingmaps } from 'react-bingmaps';

class JPLMap extends Component
{
	state = {
		response: '',
		post: '',
		responseToPost: '',
		latitude: null,
		longitude: null,
		error: null,

		pushPins : [
			{
			  "location":[-37.8136, 144.9631], "option":{ color: 'red' } //melbourne cbd
			}
		],
	};

	constructor()
	{
		super()
	}

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
			<div className="Bingmapcont">
				<ReactBingmaps
					bingmapKey = 'Ak4YC0ivePGISt6hRJCxFzEeCw67C2dnZV5lPncBzK7v4FOPaHjGrbbIoeww90mP'
					center = {[this.state.lat, this.state.long]} 
					pushPins = {this.state.pushPins}>
				</ReactBingmaps>
			</div>
		);
	}
}

export default JPLMap;

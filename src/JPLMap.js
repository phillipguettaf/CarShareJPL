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
		navigator.geolocation.getCurrentPosition(
			(position) => {
			this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
				pushPins : [
					{
					  //"location":[position.coords.latitude, position.coords.longitude], "option":{ color: 'yellow' } //doesn't work
					  "location":[-37.8136, 144.9631], "option":{ color: 'yellow' } //worked... once? not anymore??
					  //"location":[this.state.latitude, this.state.longitude], "option":{ color: 'yellow' } //doesn't work
					}
				],
			});
			},
			(error) => this.setState({error: error.message}),
			{ enableHighAccuracy: true, timeout: 20000, maximumAge: 1000},
		); 
	}

	componentDidMount() {

	}


	render(props)
	{
		return (
			
			<div className="Bingmapcont">
			<p>
            Latitude: {this.state.latitude}
			</p>
			<p>
				Longitude: {this.state.longitude}
			</p>
				<ReactBingmaps
					bingmapKey = 'Ak4YC0ivePGISt6hRJCxFzEeCw67C2dnZV5lPncBzK7v4FOPaHjGrbbIoeww90mP'
					//center = {[this.state.lat, this.state.long]} 
					center = {[0,0]} 
					pushPins = {this.state.pushPins}
					>
				</ReactBingmaps>
			</div>
		);
	}
}

export default JPLMap;

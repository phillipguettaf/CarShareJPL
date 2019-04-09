import React, { Component } from 'react';
import './App.css';

import { ReactBingmaps } from 'react-bingmaps';
import { debug } from 'util';

class JPLMap extends Component
{
	state = {
		response: '',
		post: '',
		responseToPost: '',
		latitude: null,
		longitude: null,
		error: null,
		havePos: null,

		pushPins : [
			{
			 
			}
		],
	};

	constructor()
	{
		super()

		//this.state.pushPins.push({"location":[this.state.latitude, this.state.longitude], "option":{ color: 'yellow' }});
		//this.state.pushPins.push({"location":[-37.8136, 144.9631], "option":{ color: 'red' }});
		//this.state.pushPins.push({"location":[-37.805011324660526, 144.96588099527304], "option":{ color: 'yellow' }});
		
	}

	componentWillMount() {
		 //navigator.geolocation.getCurrentPosition(
			this.watchId = navigator.geolocation.watchPosition(
			(position) => {
			console.log(this);
			this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
				//pushPins: this.state.pushPins.concat({"location":[-37.8136, 144.9631], "option":{ color: 'yellow' }})
				pushPins : [
					{
						//"location":[position.coords.latitude, position.coords.longitude], "option":{ color: 'yellow' }, //doesn't work
						//"location":[-37.8136, 144.9631], "option":{ color: 'yellow' } //worked... once? not anymore??
						//"location":[this.state.latitude, this.state.longitude], "option":{ color: 'yellow' } //doesn't work
					}
				],
			});
			},
			(error) => this.setState({error: error.message}),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
		); 
		this.setState({
			pushPins:[...this.state.pushPins, {"location":[-37.8135, 144.9630], "option":{ color: 'green' }}]
		});
	}

	componentDidMount() {
		console.log(this.state.latitude);
		this.setState({
			pushPins:[...this.state.pushPins, {"location":[-37.8135, 144.9630], "option":{ color: 'green' }}],
			pushPins:[...this.state.pushPins, {"location":[this.state.latitude, this.state.longitude], "option":{ color: 'blue' }}]
		});
	}

	componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
}

	onTap = (lat, long) => {
		this.setState({
			//pushPins:[...this.state.pushPins, {"location":[-37.8135, 144.9630], "option":{ color: 'green' }}]
			pushPins:[...this.state.pushPins, {"location":[lat, long], "option":{ color: 'red' }}]
		});
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
			<button onClick={() => { this.onTap(this.state.latitude, this.state.longitude) }}>Frick</button>
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

import React, { Component } from 'react';
import './App.css';
import CarList from './CarList';
import { Pane } from 'evergreen-ui';

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
		havePos: null,
		//Empty array, to be filled by geolocation + db data
		pushPins : [
			{
			 
			}
		],
	};


	componentWillMount() {
		//navigator.geolocation.getCurrentPosition(
		//watchPosition lets us update the pin for the user as they move + fixes displaying it!
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
			console.log(this);
			this.setState({
				latitude: position.coords.latitude,
				longitude: position.coords.longitude,
				error: null,
				pushPins : [
					{
						"location":[position.coords.latitude, position.coords.longitude], "option":{ color: 'red' },
					}
				],
			});
			},
			(error) => this.setState({error: error.message}),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
		); 
	}

	/* componentDidMount() {
	} */

	componentWillUnmount() {
    navigator.geolocation.clearWatch(this.watchId);
	}

	/* onTap = (lat, long) => {
		this.setState({
			//pushPins:[...this.state.pushPins, {"location":[-37.8135, 144.9630], "option":{ color: 'green' }}]
			pushPins:[...this.state.pushPins, {"location":[lat, long], "option":{ color: 'red' }}]
		});
	} */


	render(props)
	{
		return (
			
			<Pane Bingmapcont>
				<p>
	            Latitude: {this.state.latitude}
				</p>
				<p>
					Longitude: {this.state.longitude}
				</p>
				<CarList userlat={this.state.latitude} userlat={this.state.longitude}/>
				
				{/* <button onClick={() => { this.onTap(this.state.latitude, this.state.longitude) }}>Frick</button> */}
				<Pane
					display="flex"
				>	
					<ReactBingmaps
						bingmapKey = 'Ak4YC0ivePGISt6hRJCxFzEeCw67C2dnZV5lPncBzK7v4FOPaHjGrbbIoeww90mP'
						//center = {[this.state.lat, this.state.long]} 
						center = {[0,0]}
						pushPins = {this.state.pushPins}
						>
					</ReactBingmaps>
				</Pane>
			</Pane>

		);
	}
}

export default JPLMap;

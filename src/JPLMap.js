import React, { Component } from 'react';
import { Pane } from 'evergreen-ui';
import { Button } from '@material-ui/core';
import { ReactBingmaps } from 'react-bingmaps';

import './JPLMap.css';

class JPLMap extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			pushPins: [],
			infoboxesWithPushPins : [],
			userlong: this.props.userlong,
			userlat: this.props.userlat,
			cars: this.props.cars
		}
		this.showBookingModal = this.showBookingModal.bind(this);
	}

	userLocation(lat, long) {
		var info =
			{
				"location":[lat, long],
				"addHandler":"mouseover",
				"infoboxOption":{htmlContent:
					<div>
					</div>
				},
				"pushPinOption":{ title: "", color: 'red',},
				"infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
				"pushPinAddHandler": {"type" : "click", callback: this.callBackMethod }
			}
		return info;
	}

	showBookingModal(car) {
		return this.props.showBookingModal(car);
	}

	infoBoxBuilder(car) {
		var info = 
			{
				//"location":[this.state.cars.latitude, this.state.cars.longitude], "option":{ title: 'pls', description: '...' },
				"location":[car.latitude, car.longitude],
				"addHandler":"click", //doesn't allow dismissing the pushpin by itself.
				//"addHandler":"mouseover",
				"infoboxOption":{
					title: car.make,
					description: "Distance " + car.distance.toFixed(2) + "km",
					actions: [{
						label: 'Book', eventHandler: () => {
							this.showBookingModal(car);
						}
					}]


				},
				"pushPinOption":{ title: car.make},
				/* "infoboxAddHandler": {"type" : "click", callback: this.callBackMethod },
				"pushPinAddHandler": {"type" : "click", callback: this.callBackMethod } */
			};

		return info;
	}

	componentDidMount() {
		
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				for (var car of this.state.cars) {
					this.state.infoboxesWithPushPins.push(this.infoBoxBuilder(car));
				} 
				this.state.infoboxesWithPushPins.push(this.userLocation(position.coords.latitude, position.coords.longitude));
				
			},
			(error) => this.setState({error: error.message}),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
		);
	}


	


	render(props)
	{
		var mapCentre;
		if (this.state.selectedCar){
			mapCentre = [this.state.selectedCar.latitude,this.state.selectedCar.longitude];
		} else {
			mapCentre = [0,0];
		}
		return (
			<Pane display="flex">	
				<ReactBingmaps
					bingmapKey = 'Ak4YC0ivePGISt6hRJCxFzEeCw67C2dnZV5lPncBzK7v4FOPaHjGrbbIoeww90mP'
					center = {mapCentre}
					//pushPins = {this.state.pushPins}
					infoboxesWithPushPins = {this.state.infoboxesWithPushPins}
					>
				</ReactBingmaps>
			</Pane>

		);
	}
}

export default JPLMap;

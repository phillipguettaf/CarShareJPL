import React, { Component } from 'react';
import './JPLMap.css';
import { Pane } from 'evergreen-ui';

import { ReactBingmaps } from 'react-bingmaps';

class JPLMap extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			pushPins: [],
			infoBoxes : [],
			userlong: this.props.userlong,
			userlat: this.props.userlat,
			cars: this.props.cars
		}
	}

	setInfoBoxes() {
		var test = "test 2"

		var infoBoxesArray = [
			{
				//"location":[this.state.cars.latitude, this.state.cars.longitude], "option":{ title: 'pls', description: '...' },
				"location":[-37.8109, 144.9644], "option":{ title: 'pls', htmlContent:
				<div>
				<div class="Infobox">
				<div class="infobox-body">{test}</div>
				</div>
				<div class="infobox-stalk"></div>
				</div>
				
				}
			}
		];

		return infoBoxesArray;
	}

	componentDidMount() {
		
		this.watchId = navigator.geolocation.watchPosition(
			(position) => {
				//empty out the array to prevent pushpins from layering over each other.
				//this.setState({pushPins: []});
				for (var car of this.state.cars) {
					this.state.infoBoxes.push({ "location":[car.latitude, car.longitude]});
				} 
				this.state.pushPins.push({ "location":[position.coords.latitude, position.coords.longitude], "option":{ color: 'red' }});
			},
			(error) => this.setState({error: error.message}),
			{ enableHighAccuracy: false, timeout: 20000, maximumAge: 1000},
		);
	}

	selectCar = (car) =>
	{
		this.setState({selectedCar: car});
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
					//center = {[this.state.lat, this.state.long]} 
					center = {mapCentre}
					pushPins = {this.state.pushPins}
					infoboxes = {this.state.infoBoxes} //bad camelcase!
					>
				</ReactBingmaps>
			</Pane>

		);
	}
}

export default JPLMap;

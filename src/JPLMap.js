import React, { Component } from 'react';
import './App.css';
import { Pane } from 'evergreen-ui';

import { ReactBingmaps } from 'react-bingmaps';

class JPLMap extends Component
{
	constructor(props) {
		super(props);
		this.state = {
			pushPins: [],
			infoBoxes :	this.setInfoBoxes(),
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
				"location":[-37.8109, 144.9644], "option":{title: 'pls', htmlContent:
				<div class="Infobox">
				<div class="infobox-body" >test</div>
				</div>
				}
			}
		];

		return infoBoxesArray;
	}


	componentWillMount() {
		this.state.pushPins.push({ "location":[this.state.userlat, this.state.userlong], "option":{ color: 'red'} });
		for (var car of this.state.cars) {
			this.state.pushPins.push({ "location":[car.latitude, car.longitude], "option":{ color: 'green'} });
		}
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

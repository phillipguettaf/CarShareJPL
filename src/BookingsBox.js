import React, { Component } from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { EventSeat } from '@material-ui/icons';
import { Pane } from 'evergreen-ui';

import './CarList.css';


//const knex = require('knex')(require('./server/db/knexfile'));

class CarList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			userlat: '',
			userlong: '',
			cars: this.getCars()
		};
	}

	/**	Gets the distance between two points (lat1, lon1) & (lat2, long2)
	*	and returns it in metres
	*	Function uses the Haversine distance
	*	Implementation adapted from GeoSourceData.com's function in Javascript
	**/
	static getDistance(lat1, lon1, lat2, lon2) {
		const SEMI_CIRCLE_DEGREES = 180;
	    var radlat1 = Math.PI * lat1/SEMI_CIRCLE_DEGREES;
	    var radlat2 = Math.PI * lat2/SEMI_CIRCLE_DEGREES;
	    var theta = lon1-lon2;
	    var radtheta = Math.PI * theta/SEMI_CIRCLE_DEGREES;
	    var dist = Math.sin(radlat1) * Math.sin(radlat2) + Math.cos(radlat1) * Math.cos(radlat2) * Math.cos(radtheta);
	    dist = Math.acos(dist);
	    dist = dist * SEMI_CIRCLE_DEGREES/Math.PI;
	    dist = dist * (SEMI_CIRCLE_DEGREES / 2) * 1.1515;
	    dist = dist * 1.609344;
	    return dist
	}

	sortCars(userlat, userlong, cars) {

		for (var car of cars)
		{
			car.distance = CarList.getDistance(userlat, userlong, car.latitude, car.longitude);
		}

		this.state.cars.sort(function(a,b) {
			if (a.distance < b.distance) {
				return -1;
			} else {
				return 1;
			};
		});
	}

	getCars() {
		//return knex.select().from('cars');
		var cars = [
			{ rego: '123456', make: 'Ford Falcon', latitude: '147', longitude: '31', distance: null},
			{ rego: '132456', make: 'Toyota Camry', latitude: '144', longitude: '33', distance: null},
			{ rego: '154326', make: 'Volkswagen Beetle', latitude: '143', longitude: '34', distance: null},
			{ rego: '543321', make: 'Mazda 3', latitude: '145', longitude: '32', distance: null}
		];

		return cars;
	}



	render(props) {
		this.sortCars(this.state.userlat, this.state.userlong, this.state.cars);
		const carlist = this.state.cars.map((car, rego)=>
				<ListItem button>
				<ListItemIcon>
					<EventSeat />
				</ListItemIcon>
				<ListItemText 
					primary={car.make} 
					secondary={Math.trunc(car.distance)/1000 + "km"}/>
				<ListItemSecondaryAction>
					<Button>Book</Button>	
				</ListItemSecondaryAction>
				</ListItem> 
				);
		return (
			
			<Pane CarList
				elevation={0}
			    float="left"
			    width={400}
			    display="flex"
			    flexDirection="column"
			>
				<List component="Cars">
					{carlist}
				</List>
			</Pane>
		);
	}
}

export default CarList;

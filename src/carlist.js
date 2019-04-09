import React, { Component } from 'react';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
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
	    var radlon1 = Math.PI * lon1/SEMI_CIRCLE_DEGREES;
	    var radlon2 = Math.PI * lon2/SEMI_CIRCLE_DEGREES;
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

		this.state.cars.sort(function(a,b) {
			if (CarList.getDistance(userlat, userlong, a.latitude, a.longitude) <
			 CarList.getDistance(userlat, userlong, b.latitude, b.longitude)) {
				return -1;
			} else {
				return 1;
			};
		});
	}

	getCars() {
		//return knex.select().from('cars');
		var cars = [
			{ rego: '123456', make: 'Ford Falcon', latitude: '147', longitude: '31'},
			{ rego: '132456', make: 'Toyota Camry', latitude: '144', longitude: '33'},
			{ rego: '154326', make: 'Volkswagen Beetle', latitude: '143', longitude: '34'},
			{ rego: '543321', make: 'Mazda 3', latitude: '145', longitude: '32'}
		];

		return cars;
	}



	render(props) {
		this.sortCars(this.state.userlat, this.state.userlong, this.state.cars);
		const carlist = this.state.cars.map((car, rego)=>
				<ListItem button><ListItemText primary={car.make}/></ListItem>
				);
		return (
			
			<div className="CarList">
				<List component="Cars">
					{carlist}
				</List>
			</div>
		);
	}
}

export default CarList;

import React, { Component } from 'react';
import './App.css';
import CarList from './CarList';
import JPLMap from './JPLMap';
import BookingModal from './BookingModal';
import { Pane } from 'evergreen-ui';
import { callApi } from './apiActions'



class MapApp extends Component {
	constructor(props) {
		super(props);
		this.state = {
		response: '',
			post: '',
			responseToPost: '',
			latitude: null,
			longitude: null,
			error: null,
			havePos: null,
			selectedCar: null,
			modalActive: false,
			cars: null,
			carsLoaded: false
		};
		this.getCarsCallback = this.getCarsCallback.bind(this);
		this.selectCar = this.selectCar.bind(this);
		this.showBookingModal = this.showBookingModal.bind(this);
	}

	getCarsCallback(res) {
		console.log("Get Cars Callback got:");
		console.log(res);
		this.setState({
			cars: res,
			carsLoaded: true
		});

	}

	componentDidMount() 
	{
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

	

		// Setup a basic JSON opject to POST to the node server (mandatory)
		const postData = {
			place: "holder"
		}

		// Make our call to the API
        	callApi('getcars', postData, this.getCarsCallback);
	}

	componentWillUnmount() 
	{
		navigator.geolocation.clearWatch(this.watchId);
	}

	/* onTap = (lat, long) => {
		this.setState({
			//pushPins:[...this.state.pushPins, {"location":[-37.8135, 144.9630], "option":{ color: 'green' }}]
			pushPins:[...this.state.pushPins, {"location":[lat, long], "option":{ color: 'red' }}]
		});
	} */


	// Dude I love C
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
	    return dist;
	}

	sortCars(userlat, userlong, cars) {
		this.state.cars.forEach(function getDistance(car, index) 
		{
			car.distance = MapApp.getDistance(userlat, userlong, car.latitude, car.longitude);
		});

		this.state.cars.sort(function(a,b) 
		{
			if (a.distance < b.distance)
				return -1;
			else
				return 1;
			
		});
	}
	
	selectCar(car){
			this.setState({
				selectedCar: car
			});
	}

	showBookingModal(car) {
		this.selectCar(car);
		if (!(this.state.modalActive)) {
			this.setState({
				modalActive: true
			});
		}
	}


	render(props) {
		if (this.state.carsLoaded) {
			let modalClose = () => this.setState({ modalActive: false });
			var mapCentre;
			this.sortCars(this.state.latitude, this.state.longitude, this.state.cars);
			if (this.state.selectedCar){
				mapCentre = [this.state.selectedCar.latitude,this.state.selectedCar.longitude];
			} else {
				mapCentre = [0,0];
			}
			return (	
				<Pane Bingmapcont>
					<BookingModal show={this.state.modalActive} car={this.state.selectedCar} onHide={modalClose}/>
					<CarList userlat={this.state.latitude} userlong={this.state.longitude} cars={this.state.cars} selectCar={this.selectCar} showBookingModal={this.showBookingModal}/>
					<JPLMap userlat={this.state.latitude} userlong={this.state.longitude} cars={this.state.cars}/>
				</Pane>
			);
		} else {
			return (<h1>Loading...</h1>);
		}	
	}
}

export default MapApp;
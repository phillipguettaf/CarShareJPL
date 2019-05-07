import React, { Component } from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import { EventSeat } from '@material-ui/icons';
import { Pane } from 'evergreen-ui';

import './CarList.css';

class CarList extends Component {

	constructor(props) {
		super(props);
		this.state = {
			cars: this.props.cars
		};
		this.showBookingModal = this.showBookingModal.bind(this);
		this.selectCar = this.selectCar.bind(this);
	}

	showBookingModal(rego) {
		return this.props.showBookingModal(rego);
	}

	selectCar(rego) {
		return this.props.selectCar(rego);
	}

	render(props) {
		const carlist = this.state.cars.map((car)=>
				<ListItem button onClick={this.selectCar(car.rego)}>
				<ListItemIcon>
					<EventSeat />
				</ListItemIcon>
				<ListItemText 
					primary={car.make} 
					secondary={car.distance.toFixed(2) + "km"}/>
				<ListItemSecondaryAction>
					<Button onClick={this.showBookingModal(car.rego)}>Book</Button>	
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

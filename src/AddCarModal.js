import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';
import { TextField, MenuItem, FormControl, InputLabel, Select, OutlinedInput } from '@material-ui/core';
import classNames from 'classnames';

import './AddCarModal.css'

class AddCarModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			car: {
				rego: null,
				make: null,
				model: null,
				year: null,
				latitude: null,
				longitude: null
			},
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
        var intYear = parseInt(this.state.car.year, 10);
        var fLatitude = parseFloat(this.state.car.latitude);
        var fLongitude = parseFloat(this.state.car.longitude);
        
        this.setState({
            car: {
                year: intYear,
                latitude: fLatitude,
                longitude: fLongitude
            },
        });
		return this.props.handleSubmit(this.state.car);
	}

	handleChange = event => {
		this.setState({ [event.target.name]: event.target.value });
	  };

	render() {
		const classes  = this.props;

		return (
			<Dialog
				isShown={this.props.show}
				title={"Add New Car"}
				onCloseComplete={this.props.onHide}

				onConfirm={() => this.handleSubmit()}
				>
			{/* rego, make, model, year, latitude, longitude */}

			{/* Maybe use https://material-ui.com/demos/text-fields/#outlined-input-adornments */}
			<TextField
				id="rego"
				label="Registration"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.rego}
				/>

			<TextField
				id="make"
				label="Make"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.make}
				/>

			<TextField
				id="model"
				label="Model"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.model}
				/>

			<TextField
				id="year"
				label="Year"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.year}
				/>

			<TextField
				id="lat"
				label="Latitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.latitude}
				/>

			<TextField
				id="lon"
				label="Longitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.car.longitude}
				/>
				
			</Dialog>
		);
	}

}
export default AddCarModal;

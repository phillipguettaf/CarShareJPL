import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';
import { TextField, MenuItem, FormControl, InputLabel, Select, OutlinedInput } from '@material-ui/core';
import classNames from 'classnames';

import './AddCarModal.css'

class AddCarModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
            rego: null,
            make: null,
            model: null,
            year: null,
            latitude: null,
            longitude: null
		};
		this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {
        var intYear = parseInt(this.state.year, 10);
        var fLatitude = parseFloat(this.state.latitude);
        var fLongitude = parseFloat(this.state.longitude);
        
        this.setState({
            year: intYear,
            latitude: fLatitude,
            longitude: fLongitude
        });
		return this.props.handleSubmit(this.state);
	}

	handleChange = (event) => {
		this.setState({
            [event.target.name]: event.target.value
        });
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
				name="rego"
				label="Registration"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.rego}
                onChange={this.handleChange}
				/>

			<TextField
				name="make"
				label="Make"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.make}
                onChange={this.handleChange}
				/>

			<TextField
				name="model"
				label="Model"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.model}
                onChange={this.handleChange}
				/>

			<TextField
				name="year"
				label="Year"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.year}
                onChange={this.handleChange}
				/>

			<TextField
				name="latitude"
				label="Latitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.latitude}
                onChange={this.handleChange}
				/>

			<TextField
				name="longitude"
				label="Longitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				value={this.state.longitude}
                onChange={this.handleChange}
				/>
				
			</Dialog>
		);
	}

}
export default AddCarModal;

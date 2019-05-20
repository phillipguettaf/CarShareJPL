import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';
import { TextField, MenuItem, FormControl, InputLabel, Select, OutlinedInput } from '@material-ui/core';
import classNames from 'classnames';

import './AddCarModal.css'

class AddCarModal extends Component {
	constructor(props) {
		super(props);
		this.state = {
			carYear: null,
		}
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		return this.props.handleSubmit();
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
				/>

			<TextField
				id="make"
				label="Make"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				/>

			<TextField
				id="model"
				label="Model"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				/>

			<FormControl variant="outlined" className={classes.formControl}>
				<InputLabel
					ref={ref => {
					this.InputLabelRef = ref;
					}}
					htmlFor="outlined-year-simple"
				>
					Year
				</InputLabel>
				<Select
					value={this.state.age}
					onChange={this.handleChange}
					input={
					<OutlinedInput
						labelWidth={this.state.labelWidth}
						name="year"
						id="outlined-year-simple"
					/>
					}
				>
					<MenuItem value="">
					<em>None</em>
					</MenuItem>
					{/* TODO: loop to create years */}
					<MenuItem value={10}>Ten</MenuItem>
					<MenuItem value={20}>Twenty</MenuItem>
					<MenuItem value={30}>Thirty</MenuItem>
				</Select>
			</FormControl>

			<TextField
				id="lat"
				label="Latitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				/>

			<TextField
				id="lon"
				label="Longitude"
				className={classNames(classes.textField, classes.dense)}
				margin="dense"
				variant="outlined"
				/>
				
			</Dialog>
		);
	}

}
export default AddCarModal;

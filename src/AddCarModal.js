import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';

import './AddCarModal.css'

class AddCarModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(car) {
		return this.props.handleSubmit(car);
	}

	render() {
		return (
			<Dialog
				isShown={this.props.show}
				title={"Book " + (this.props.car == null ? "Dummy Car" : 
					this.props.car.make + " " + this.props.car.model + " " + this.props.car.rego)}
				onCloseComplete={this.props.onHide}

				onConfirm={() => this.handleSubmit(this.props.car)}
			>
				<p>WIP</p>
				
			</Dialog>
		);
	}

}
export default AddCarModal;

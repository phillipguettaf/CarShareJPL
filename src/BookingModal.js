import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';
import { withStyles } from '@material-ui/core/styles';

const styles = {
	root: {
		color: "black"
	},
};

class BookingModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(car) {
		return this.props.handleSubmit(car);
	}

	render() {
		return (
			<Dialog className={this.props.classes.root}
				isShown={this.props.show}
				title={"Book " + (this.props.car == null ? "Dummy Car" : 
					this.props.car.make + " " + this.props.car.model + " " + this.props.car.rego)}
				onCloseComplete={this.props.onHide}
				onConfirm={() => this.handleSubmit(this.props.car)}
			>
				<p>Your car will be reserved for 10 minutes from the booking time.</p>
				<p>After this time, the car will be available for booking again.</p>
				
			</Dialog>
		);
	}

}

export default withStyles(styles)(BookingModal);
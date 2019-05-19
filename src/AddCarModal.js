import React, { Component } from 'react';
import { Dialog } from 'evergreen-ui';

import './AddCarModal.css'

class AddCarModal extends Component {
	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		return this.props.handleSubmit();
	}

	render() {
		return (
			<Dialog
				isShown={this.props.show}
				title={"Add New Car"}
				onCloseComplete={this.props.onHide}

				onConfirm={() => this.handleSubmit()}
			>
				<p>WIP</p>
				
			</Dialog>
		);
	}

}
export default AddCarModal;

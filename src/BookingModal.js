import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import DatePicker from 'react-datepicker';
import { Button } from '@material-ui/core';


class BookingModal extends Component {
	constructor(props) {
		super(props);
		this.state={
			show: this.props.show,
			startDate: new Date(),
			endDate: new Date(),
			car: this.props.car
		};
		this.handleChangeStart = this.handleChangeStart.bind(this);
		this.handleChangeEnd = this.handleChangeEnd.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit() {
		return;
	}

	handleChangeStart(date) {
		this.setState({
			startDate: date
		});
	}

	handleChangeEnd(date) {
		this.setState({
			endDate: date
		});
	}

	render() {
		
		return (
			<Modal
				{...this.props}
				centered
				animation="true"
			>
				<Modal.Header closeButton>
					<Modal.Title>
					Book
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Book</p>
					<span>Start: </span>
					<DatePicker
						todayButton={"Today"}
					    selected={this.state.startDate}
					    onChange={this.handleChangeStart}
					    showTimeSelect
					    selectsStart
					    startDate={this.state.startDate}
					    endDate={this.state.endDate}
					    timeFormat="HH:mm"
					    timeIntervals={15}
					    dateFormat="dd/mm/yyyy h:mm aa"
					    timeCaption="start"
					/>
					<br/>
					<span>End: </span>
					<DatePicker
					    todayButton={"Today"}
					    selected={this.state.endDate}
					    onChange={this.handleChangeEnd}
					    showTimeSelect
					    selectsEnd
					    startDate={this.state.startDate}
					    endDate={this.state.endDate}
					    timeFormat="HH:mm"
					    timeIntervals={15}
					    dateFormat="dd/mm/yyyy h:mm aa"
					    timeCaption="end"
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button variant="text" onClick={this.props.onHide}>
						Cancel
					</Button>
					<Button variant="contained" onClick={this.handleSubmit}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}

}

export default BookingModal;
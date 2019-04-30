import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import { DatePicker } from 'react-datepicker';


class BookingModal extends Component {
	constructor(props) {
		super(props);
		this.state={
			show: false,
			startDate: new Date(),
			endDate: new Date()
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
			startDate: date;
		});
	}

	handleChangeEnd(date) {
		this.setState({
			endDate: date;
		});
	}

	render() {
		return (
			<Modal
				{...this.props}
				centered
			>
				<Modal.Header closeButton>
					<Modal.Title>
					{this.props.car.make}{this.props.car.model}
					</Modal.Title>
				</Modal.Header>
				<Modal.Body>
					<p>Start</p>
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
					<p>End</p>
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
					<Button variant="secondary" onClick={() => this.setState({show:false})}>
						Cancel
					</Button>
					<Button variant="primary" onClick={this.handleSubmit}>
						Submit
					</Button>
				</Modal.Footer>
			</Modal>
		);
	}

}

export default BookingModal;
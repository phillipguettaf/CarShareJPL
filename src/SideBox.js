import React, { Component } from 'react';
import { Pane, SideSheet, TabList, Card, Heading, Paragraph } from 'evergreen-ui';

class SideBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShown: this.props.isShown,
			currentBooking: this.props.currentBooking
		};
	}

	renderBookingBox() {
		if (this.state.currentBooking) {
			return(
				<Card
	            backgroundColor="white"
	            elevation={0}
	            height={240}
	            display="flex"
	            alignItems="center"
	            justifyContent="center"
	        	>
	            	<Heading>
	            		You booked a {this.state.currentBooking.car.make} {this.state.currentBooking.car.model}
	            		@ {this.state.currentBooking.start}
	            	</Heading>

	            	<Paragraph>
	            		{this.state.currentBooking.car.make}
	            		{this.state.currentBooking.car.model}
	            		{this.state.currentBooking.car.rego}
	            		{this.state.currentBooking.start}
	            	</Paragraph>
	          </Card>
			);
		} else {
			return (
				<Card
	            backgroundColor="white"
	            elevation={0}
	            height={240}
	            display="flex"
	            alignItems="center"
	            justifyContent="center"
	        	>
	            	<Heading>
	            		No cars currently booked
	            	</Heading>
	          </Card>
			)
		}
	}

	render(props) {
		var sideBooking = this.renderBookingBox();
		return (
			<SideSheet
				isShown={this.state.isShown}
				onCloseComplete={() => this.onHide}
				containerProps={{
					display: 'flex',
					flex: '1',
					flexdirection: 'column',
				}}
			>
				<Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
					{sideBooking}
				</Pane>
				}
			</SideSheet>
		);
	}
}

export default SideBox;

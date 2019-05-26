import React, { Component } from 'react';
import { Position, Pane, SideSheet, TabList, Card, Heading, Paragraph } from 'evergreen-ui';

class SideBox extends Component {

	constructor(props) {
		super(props);
	}

	onHide() {
		return this.props.onHide();
	}

	renderBookingBox() {
		if (this.props.currentBooking) {
			return(
				<Card
	            backgroundColor="white"
	            elevation={0}
	            height={240}
	            display="flex"
	            alignItems="center"
	            justifyContent="center"
                flexDirection="column"
	        	>
	            	<Heading>
                   {this.props.currentBooking.rego} <br/>
                         @ {this.props.currentBooking.start}
	            	</Heading>
                   <br/>
                   <Paragraph>
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
	            		No car currently booked
	            	</Heading>
	          </Card>
			)
		}
	}

	render(props) {
		var sideBooking = this.renderBookingBox();
		return (
			<SideSheet
				isShown={this.props.isShown}
				onCloseComplete={() => this.onHide()}
				position={Position.LEFT}
				containerProps={{
					display: 'flex',
					flex: '1',
					flexdirection: 'column',
				}}
			>
				<Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
					{sideBooking}
				</Pane>
			</SideSheet>
		);
	}
}

export default SideBox;

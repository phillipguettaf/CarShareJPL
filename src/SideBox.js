import React, { Component } from 'react';
import { Button, Position, Pane, SideSheet, TabList, Card, Heading, Paragraph } from 'evergreen-ui';

class SideBox extends Component {

	constructor(props) {
		super(props);
	}

	onHide() {
		return this.props.onHide();
	}
 
    endBooking() {
        return this.props.endBooking();
    }

	renderCurrentBookingBox() {
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
                <Button onClick={() => this.endBooking()}>
                    Return Car
                </Button>
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
 
    renderPreviousBookings() {
        if (this.props.previousBookings) {
            this.props.previousBookings.reverse();
            var bookingsMap = this.props.previousBookings.map((booking, key) => {
                return (
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
                    {booking.rego} <br/>
                         @ {booking.start}
                    </Heading>
                    <br/>
                    <Paragraph>
                    {booking.make} <br/> {booking.model}
                    </Paragraph>
                    </Card>
                )
            });
            return (
                bookingsMap
            )
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
                        No previous bookings
                    </Heading>
                </Card>
            )
        }
    }

	render(props) {
		var currentBooking = this.renderCurrentBookingBox();
        var previousBookings = this.renderPreviousBookings();
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
				<Pane flex="1" overflowY="scroll" background="tint1" padding={16} borderBottom="muted">
					{currentBooking}
				</Pane>
                <Pane flex="1" overflowY="scroll" background="tint1" padding={16}>
                    {previousBookings}
                </Pane>
			</SideSheet>
		);
	}
}

export default SideBox;

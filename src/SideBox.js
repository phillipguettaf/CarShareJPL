import React, { Component } from 'react';
import { Pane, SideSheet, TabList, Card } from 'evergreen-ui';

class SideBox extends Component {

	constructor(props) {
		super(props);
		this.state = {
			isShown: this.props.isShown,
			currentBooking = this.currentBooking
		};
	}

	render(props) {
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
				<Pane>
				</Pane>
			</SideSheet>
		);
	}
}

export default SideBox;

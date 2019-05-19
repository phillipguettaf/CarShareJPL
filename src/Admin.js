import React, { Component } from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';
import AddCarModal from './AddCarModal';

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AddCarModal: false,
        };
        
    }

    showAddCarModal() {
		if (!(this.state.AddCarModal)) {
			this.setState({
				AddCarModal: true
			});
		}
	}
    

	render() {

        let AddCarModalClose = () => this.setState({ AddCarModal: false });
        return (
            <div>
                <h1>Administration Console</h1>
                <p>
                    <Button 
                        variant="contained" 
                        color="primary"
                        onClick={() => this.showAddCarModal()}>
                        Add Car
                    </Button>
                </p>

                <p>
                    <Button variant="contained" color="secondary">
                        Remove Car
                    </Button>
                </p>
                
                <p>
                    <Button variant="contained">
                        Start Car Simulation
                    </Button>
                </p>

                {/* Modals */}

                <AddCarModal show={this.state.AddCarModal} car={this.state.selectedCar} onHide={AddCarModalClose} handleSubmit={this.submitBooking}/>
            </div>
        )
    }

}


export default Admin;
import React, { Component } from 'react';
import { Button } from '@material-ui/core';
import AddCarModal from './AddCarModal';
import { callApi } from './apiActions'

class Admin extends Component {

    constructor(props) {
        super(props);
        this.state = {
            AddCarModal: false,
        };
        this.AddCarSubmit = this.AddCarSubmit.bind(this);
        
    }

    
	AddCarSubmit(car) {
		callApi('addcar', car, this.submitBookingCallback);
       
		this.setState({
			AddCarModal: false
		}); 
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

                <AddCarModal show={this.state.AddCarModal} car={this.state.selectedCar} onHide={AddCarModalClose} handleSubmit={this.AddCarSubmit}/>
            </div>
        )
    }

}


export default Admin;
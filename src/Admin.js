import React, { Component } from 'react';
import { Button, List, ListItem, ListItemIcon, ListItemText, ListItemSecondaryAction } from '@material-ui/core';

class Admin extends Component {

    constructor(props) {
		super(props);
	}

	render() {
        return (
            <div>
                <h1>Administration Console</h1>
                <p>
                    <Button variant="contained" color="primary">
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
            </div>
        )
    }

}


export default Admin;
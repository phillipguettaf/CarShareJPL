import { React, Component } from 'react';
import { Button } from '@material-ui/core';

class CarBox extends Component {

	bookCar() {
		
	}

	render(props) {
		return(
			<div>
				<img src={this.props.car.image}/>
				<p class='title'>{car.make} {car.model}</p>
				<br/>
				<p class='subtitle'>{car.year}</p>
				<br/>
				<Button onClick=bookCar()>BOOK</Button>
			</div>
		);
	}
}

export default CarBox;
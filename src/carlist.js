import React, { Component } from 'react';

const knex = require('knex')(require('../server/db/knexfile'));

function getCars() {
	return knex.select().from('cars');
};

class CarItem extends Component {
	return (
		<CarInList(props)>
	);
};

class CarList extends Component {
	constructor(props) {
		super(props)
		this.state: {
			cars: getCars()
		};
	};
};

function CarInList(props) {
	return (
		<button className="carInList">
			{props.value}
		</button>
	);
};
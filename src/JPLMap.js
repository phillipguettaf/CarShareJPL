import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { ReactBingmaps } from 'react-bingmaps';
import 'react-geolocation';


class JPLMap extends Component
{
	state = {
		response: '',
		post: '',
		responseToPost: '',
	};

	constructor()
	{
		super()
	}


	render(props)
	{
		return (
			<div className="Bingmapcont">
				<ReactBingmaps
					bingmapKey = 'Ak4YC0ivePGISt6hRJCxFzEeCw67C2dnZV5lPncBzK7v4FOPaHjGrbbIoeww90mP'
					center = {[this.props.lat, this.props.long]} >
				</ReactBingmaps>
			</div>
		);
	}
}

export default JPLMap;

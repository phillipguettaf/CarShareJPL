import React, { Component } from 'react';
import './App.css';
import logo from './logo.png'
import stock from './carshare.jpeg'


class SplashScreen extends Component
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
			<div className="SplashScreen">
				<img src={logo} class='logo' />

				<div class='infobox'>
					<h2 class='infotext'> JPL Car Share Scheme is a disruptive and passionate new startup innovating the way you get from A to B</h2>
					<img class='infoimg' src='https://ak1.picdn.net/shutterstock/videos/21632611/thumb/1.jpg' />
				</div>
				
				<div class='infobox'>
					<h2 class='infoimg'> Login with Google or Facebook to get started :^)</h2>
					<img class='infotext' src={stock} />
				</div>

				<br/ >

				<div class='infobox'>
				<h3> Proudly built with ❤ and </h3>
				
				<img src="https://www.paypalobjects.com/webstatic/en_US/i/buttons/PP_logo_h_200x51.png" alt="PayPal Logo" class='aff-logo' />
				<img src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K' class='aff-logo'/>

				<img src='https://nodejs.org/static/images/logos/nodejs-new-black.png' class='aff-logo' />

				</div>
			</div>
		);
	}
}

export default SplashScreen;

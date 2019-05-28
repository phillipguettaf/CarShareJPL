import React, { Component } from 'react';
import './App.css';

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
				<h1> Welcome to JPL Car Share </h1>
				<h2> Driving Innovation</h2>
				<img src='https://citycarclub.fi/sites/citycarclub.fi/files/styles/frontpage_slider_900x300/public/bigstock-Carsharing-Concept-58627238.jpg?itok=_SICK62K' />
				<h3 class='info-text'> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque porttitor justo quis leo condimentum iaculis. Integer dictum interdum est, auctor venenatis orci vestibulum sed. Vivamus id blandit enim. Proin aliquet porttitor lacinia. Sed eu gravida lorem, ut cursus sapien. Integer vestibulum velit et quam mattis aliquam. Aenean facilisis gravida nulla non pharetra. Quisque at diam eu dolor tempus suscipit. Proin dignissim nisi ut iaculis lobortis. Sed vehicula auctor velit quis congue. Ut lobortis vitae nisl in pharetra. Aliquam et elementum ligula, iaculis lobortis est. <br/> <br/>
Ut sed auctor erat, a sagittis urna. Praesent blandit diam non euismod fringilla. Duis et sodales lacus. Suspendisse porta nunc tincidunt neque scelerisque, sed finibus lorem blandit. Aenean in sollicitudin elit. Maecenas nec lacus vitae mauris efficitur rhoncus vel a lacus. Vestibulum ac eros ante. Aliquam scelerisque, nisl sed bibendum molestie, nunc odio ultrices ligula, et accumsan enim erat nec leo. Etiam eu scelerisque elit. <br/> <br/>
Vestibulum gravida urna id sem posuere accumsan. Phasellus et sapien lacus. Vivamus a volutpat eros. Aliquam malesuada urna tortor, in pulvinar tellus interdum eu. Vestibulum nec consectetur dui, ut fermentum nisl. Nulla luctus ante non tempus elementum. Curabitur velit neque, pharetra vitae lectus non, vestibulum finibus justo. Fusce pharetra, enim.</h3>
				<img src='https://ak1.picdn.net/shutterstock/videos/21632611/thumb/1.jpg' />

			</div>
		);
	}
}

export default SplashScreen;

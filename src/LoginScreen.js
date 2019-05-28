// Programmed by Blaise Saunders
// s3561722 - s3561722@student.rmit.edu.au


import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin  from 'react-facebook-login';
import { Button } from 'evergreen-ui'

class LoginScreen extends React.Component
{

	constructor(props)
	{
		super(props);
		this.responseFacebook = this.responseFacebook.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
		this.loginFailed = this.loginFailed.bind(this);
		this.storeUser = this.storeUser.bind(this);
		this.logoutFunc = this.logoutFunc.bind(this);
		this.state = {
			name: '',
    			loggedIn: false,
    			havePic: false,
    			picUrl: true,
			email: ''
		}; 

		// Try and load a local storage in
		var user = localStorage.getItem('userstate')

		if (user)
		{
			user = JSON.parse(user)
			this.state = user
		}

	
	}

	storeUser()
	{
		console.log(this.state)
		localStorage.setItem('userstate', JSON.stringify(this.state))
		console.log("User stored! :^)")
		console.log(localStorage)
	}


	logoutFunc()
	{
		localStorage.removeItem('userstate')
		this.props.nameHandler('');
		this.setState({
			name: '',
    			loggedIn: false,
    			havePic: false,
    			picUrl: '',
			email: ''

		});
	}


	responseFacebook(response)
	{
		this.setState({
			name: response.name,
			loggedIn: true,
			havePic: true,
			picUrl: response.picture.data.url,
			email: response.email
		});
	
		this.props.nameHandler(this.state);
		this.storeUser()
	}

	responseGoogle(googleUser) 
	{
		if (!googleUser.isSignedIn())
			return;

		var googleName = googleUser.getBasicProfile().getName();
		var googleEmail = googleUser.getBasicProfile().getEmail();
		var picUrl = googleUser.getBasicProfile().getImageUrl();


		console.log({ googleName });
		this.setState({
			name: googleName,
			loggedIn: true,
			havePic: true,
			picUrl: picUrl,
			email: googleEmail
		});

		this.props.nameHandler(this.state);
		this.storeUser()
	}

	loginFailed()
	{
		return
	}

	render(props)
	{

		let printName = this.state.name;

		var FontAwesome = require('react-fontawesome');

		if (this.state.loggedIn)
		{
			if (this.state.havePic)
			{
				return (
					<div class='login'>
						<img src={ this.state.picUrl } alt="User Profile" class='profilePic' height='60px' />
						<span class='loginText'>
							
							Logged in as { printName }   
						
							<Button color="secondary" className='logout' onClick={this.logoutFunc}>
								Logout
							</Button>
						</span>
					</div>
				)
			}
			else {
				return (
					<div class='login'>
						<h3> Logged in as { printName } </h3>
					</div>
				)
			}
		}
		else
			return (
				<div class='login'>
					<FacebookLogin
					appId="1643021745841527"
					fields="name,email,picture"
					scope="public_profile"
					icon="fa-facebook"
					onFailure={this.loginFailed}
				        callback={this.responseFacebook} />



					<GoogleLogin clientId="488759256307-hioftvdmt9sp1aka7dctnaka6vedvl5e.apps.googleusercontent.com"
					scope="profile"
					fetchBasicProfile={true}
					onSuccess={this.responseGoogle}>
					<FontAwesome name='google' />
					<span> Login with Google</span>
					</GoogleLogin>
				</div>
			);
	}

}

export default LoginScreen;


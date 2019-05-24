// Programmed by Blaise Saunders
// s3561722 - s3561722@student.rmit.edu.au
// Last updated 09/09/2018


import React from 'react';
import GoogleLogin from 'react-google-login';
import FacebookLogin  from 'react-facebook-login';

class LoginScreen extends React.Component
{

	constructor(props)
	{
		super(props);
		this.responseFacebook = this.responseFacebook.bind(this);
		this.responseGoogle = this.responseGoogle.bind(this);
		this.loginFailed = this.loginFailed.bind(this);
        this.recommendationCallback = this.recommendationCallback.bind(this);
        this.state = {
                name: '',
    			loggedIn: false,
    			havePic: false,
    			picUrl: true,
                recommendation: null,
        };

	}


    recommendationCallback(product) {
        console.log(product);
        this.setState({
            recommendation: product,
        });
    }

	responseFacebook(response) {
		this.setState({
			name: response.name,
			loggedIn: true,
			havePic: true,
			picUrl: response.picture.data.url,
		});
		this.props.nameHandler(this.state.name);
		}

	responseGoogle(googleUser) {
		if (!googleUser.isSignedIn())
			return;

		var googleName = googleUser.getBasicProfile().getName();
		var picUrl = googleUser.getBasicProfile().getImageUrl();


		console.log({ googleName });
		this.setState({
			name: googleName,
			loggedIn: true,
			havePic: true,
			picUrl: picUrl,
		});

		this.props.nameHandler(this.state.name);
  }

	loginFailed()
	{
		/*console.log('Login override');
		this.setState({
			name: "TESTUSER",
			loggedIn: true,
			havePic: true,
			picUrl: "https://google.com",
            recommendation: this.state.recommendation,
		});
		this.props.nameHandler("nemmjeff");*/
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
						<span class='loginText'>  Now logged in as { printName } </span>
						<br/>
					</div>
				)
			}
			else {
				return (
					<div class='login'>
						<h3> Now logged in as { printName } </h3>
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

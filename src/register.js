//This is a render method that will serve as the foundation for the registration functionality

import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';
import axios from 'axios';

class Register extends Component
{
	constructor(props)
	{
		super(props);
		this.state={first_name:'', last_name:'', email:'', password:'', dob:'', licenceNo:''}
	}
	
	render()
	{
		return (
		<div>
			<MuiThemeProvider>
				<div>
					<AppBar
						title="Register"
					/>
					<TextField
						hintText="Enter your First Name"
						loatingLabelText="First Name"
						onChange = {(event,newValue) => this.setState({first_name:newValue})}
					/>
					<br/>
					<TextField
						hintText="Enter your Last Name"
						floatingLabelText="Last Name"
						onChange = {(event,newValue) => this.setState({last_name:newValue})}
					/>
					<br/>
					<TextField
						hintText="Enter your Email"
						type="email"
						floatingLabelText="Email"
						onChange = {(event,newValue) => this.setState({email:newValue})}
					/>
					<br/>
					<TextField //We plan to change the "Age" column in the Users table to "DOB"
						hintText="Enter your Date of Birth"
						//type="???" Is there a date datatype we should use here?
						floatingLabelText="DD-MM-YYYY"
						onChange = {(event,newValue) => this.setState({dob:newValue})}
					/>
					<br/>
					<TextField
						hintText="Enter your Lincence Number"
						floatingLabelText="eg: 012345678"
						onChange = {(event,newValue) => this.setState({email:newValue})}
					/>
					<br/>
					<TextField
						type = "password"
						hintText="Enter your Password"
						floatingLabelText="Password"
						onChange = {(event,newValue) => this.setState({password:newValue})}
					/>
					<br/>
					<RaisedButton label="Submit" primary={true} style={style} onClick={(event) => this.handleClick(event)}/>
				</div>
			</MuiThemeProvider>
		</div>
		);
	}
}

const style = {
  margin: 15,
};

export default Register;

//handeClick function to send user input to the backend
//MAY OR MAY NOT NEED TO BE MOVED TO WORK
import Login from './Login';
class Register extends Component
{
	... //Unsure of what these dots do, tutorial claims they're important, will research
	handleClick(event)
	{
		var apiBaseUrl = "http://localhost:4000/api/";
		console.log("values", this.state.first_name, this.state.last_name, this.state.email, this.state.dob, this.state.licenceNo, this.state.password);
		//TBD check if registration fields are empty and prompt user
		var self = this;
		var payload=
		{
			"first_name": this.state.first_name,
			"last_name":this.state.last_name,
			"email":this.state.email,
			"dob":this.state.dob,
			"LicenceNo":this.state.licenceNo,
			"password":this.state.password
		}
		//Throw user variables to API, next line needs to be uncommented and implimented
		//axios.post(API_URL + '/register', payload)
		.then(function (response) 
		{
			console.log(response);
			if(response.data.code == 200)
			{
				console.log("registration successfull");
				var loginscreen=[];
				loginscreen.push(<Login parentContext={this}/>);
				var loginmessage = "This account doesn't exist. Please register your account";
				self.props.parentContext.setState(
				{
					loginscreen:loginscreen,
					loginmessage:loginmessage,
					buttonLabel:"Register",
					isLogin:true
				});
			}
		})
		//React sometimes doesn't like it when we do our own exception handling, needs testing
		.catch(function (error)
		{
			console.log(error);
		});
	}
}
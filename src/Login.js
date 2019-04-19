/* 	Author: Liam Wright
	This is a render method that will serve as the foundation for the login/register functionality
*/

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import TextField from 'material-ui/TextField';

//handeClick function to send user input to the backend
//MAY OR MAY NOT NEED TO BE MOVED TO WORK

handleClick(event)
{
	//Once an API has been made, place it in the URL placeholder below
	var apiBaseUrl = "http://"
	var self = this;
	var payload={
		"email":this.state.username,
		"password":this.state.password
	}
	
	axios.post(apiBaseUrl+'login', payload)
	.then(function (response)
	{
		//Checks HTML code and returns the relevant message for the user.
		console.log(response);
		if(response.data.code == 200
		{
			console.log("Login successful");
			var uploadScreen=[];
			uploadScreen.push(<UploadScreen appContext=
			{
				self.props.appContext
			}/>)
			self.props.appContext.setState({loginPage:[],uploadScreen})
		}
		
		else if(response.data.code == 204)
		{
			console.log("Username and Password Do Not Match");
			alert("Username and Password Do Not Match");
		}
		
		else
		{
			console.log("Username Does Not Exist");
			alert("Username Does Not Exist");
		}
	})
	
	.catch(function (error)
	{
		console.log(error);
	});
}
//Login class for rendering login components
class Login extends Component
{
	constructor(props)
	{
		super(props);
		this.state=
		{
			username:'',
			password:''
		}
	}
	
	render()
	{
		return (
			<div>
				<MuiThemeProvider>
				<div>
					<AppBar
						title='Login'
					/>
					
					<TextField
						hintTet="Enter your Username"
						floatingLabelText="Username"
						onchange = {(event,newValue) =>
						this.setState({username:newValue})}
						/>
					<br/>
						
					<TetField
						type="password"
						hintText="Enter your Password"
						floatingLabelText="Password"
						onChange = {(event,newValue) =>
						this.setState({password:newValue})}
						/>
					<br/>
					
					<RaisedButton label="Submit" primary={true}
					style= {style} onClick={(event) => this.handleClick(event)}/>
				</div>
				</MultiThemeProvider>
			</div>
		);
	}
}

const style =
{
	margin:15,
};

export default Login;
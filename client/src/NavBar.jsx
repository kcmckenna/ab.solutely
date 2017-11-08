import React from 'react';
import { Link } from 'react-router-dom';
////////////// MATERIAL-UI IMPORTS ///////////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import RaisedButton from 'material-ui/RaisedButton';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';

const NavBar = (props) => {
	return (
		<div className='NavBar'>

			<AppBar
			title="ab.solutely" 
			backgroundColor="#449EE3"
			iconClassNameRight="muidocs-icon-navigation-expand-more"/>
				<Link to="/">Home</Link>
				{props.currentUser
					? (
						<span>
							<RaisedButton backgroundColor="#449EE3" label="Account" />
							<Link to="/profile">Profile</Link>
							<Link to="/edit">Edit</Link>
							<Link to="/delete">Delete</Link>
							<RaisedButton backgroundColor="#449EE3" label="Plans" />
							<Link to="/plans">Plans</Link>
							<Link to="/makeplan">Make Plan</Link>
							<Link to="/editplan">Edit Plan</Link>
							<Link to="/deleteplan">Delete Plan</Link>
							<RaisedButton backgroundColor="#449EE3" label="---" />
							<Link to="/logout">Log Out</Link>
						</span>
					)
					: (
						<span>
							<RaisedButton backgroundColor="#449EE3" label="---" />
							<Link to="/login">Log In</Link>
							<Link to="/signup">Sign Up</Link>
						</span>
					)
					
				}
		
		</div>
	)
}

export default NavBar
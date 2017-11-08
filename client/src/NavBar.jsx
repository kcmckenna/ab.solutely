import React from 'react'
import { Link } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import RaisedButton from 'material-ui/RaisedButton';

const NavBar = (props) => {
	return (
		<div className='NavBar'>

			<AppBar
			title="ab.solutely" 
			backgroundColor="#449EE3"
			iconClassNameRight="muidocs-icon-navigation-expand-more"/>
			<RaisedButton backgroundColor="#449EE3" label="SOMETHING" />
				<Link to="/">Home</Link>
				{props.currentUser
					? (
						<span>
							<Link to="/profile">Profile</Link>
							<Link to="/edit">Edit</Link>
							<Link to="/delete">Delete</Link>
							<RaisedButton backgroundColor="#449EE3" label="SOMETHING" />
							<Link to="/plans">Plans</Link>
							<Link to="/makeplan">Make Plan</Link>
							<Link to="/editplan">Edit Plan</Link>
							<Link to="/deleteplan">Delete Plan</Link>
							<RaisedButton backgroundColor="#449EE3" label="SOMETHING" />
							<Link to="/logout">Log Out</Link>
						</span>
					)
					: (
						<span>
							<Link to="/login">Log In</Link>
							<Link to="/signup">Sign Up</Link>
						</span>
					)
					
				}
		
		</div>
	)
}

export default NavBar
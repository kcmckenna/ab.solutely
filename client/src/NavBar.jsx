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
				showMenuIconButton={false}
				/*iconClassNameRight="muidocs-icon-navigation-expand-more"*/
				style={{
					backgroundColor: "#526c7c",
					fontFamily: "Megrim",
					}}
				zDepth={2}
				contianerElement={ 
					<RaisedButton 
						backgroundColor="#a6bac5" 
						label="Profile"
						containerElement={<Link to="/profile" />} 
						linkButton={true}  
					/>}
			/>
				<RaisedButton 
					backgroundColor="#a6bac5" 
					label="Home"
					containerElement={<Link to="/" />} 
					linkButton={true}  
				/>
				{props.currentUser
					? (
						<span>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Profile"
								containerElement={<Link to="/profile" />} 
								linkButton={true}  
							/>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Plans"
								containerElement={<Link to="/plans" />} 
								linkButton={true}  
							/>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Make Plans"
								containerElement={<Link to="/makeplan" />} 
								linkButton={true}  
							/>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Log Out"
								containerElement={<Link to="/logout" />} 
								linkButton={true}  
							/>
						</span>
					)
					: (
						<span>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Log In"
								containerElement={<Link to="/login" />} 
								linkButton={true}  
							/>
							<RaisedButton 
								backgroundColor="#a6bac5" 
								label="Sign Up"
								containerElement={<Link to="/signup" />} 
								linkButton={true}  
							/>
						</span>
					)
					
				}
		
		</div>
	)
}

export default NavBar
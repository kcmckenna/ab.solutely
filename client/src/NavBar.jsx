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
import FontIcon from 'material-ui/FontIcon';
import {blue500, red500, greenA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import ActionHome from 'material-ui/svg-icons/action/home';


const NavBar = (props) => {
	return (
		<div className='NavBar'>

			<AppBar
				title="ab.solutely"
				showMenuIconButton={false}
				style={{ backgroundColor: "#526c7c", fontFamily: "Megrim",}}
				zDepth={2}
			/>
				<RaisedButton 
					className="homeBtn"
					backgroundColor="#a6bac5" 
					label="Home"
					containerElement={<Link to="/" />} 
					linkButton={true}	  
					style={{fontFamily: "Raleway"}} 
					fontFamily="Raleway"
				/>
				{/* <FontIcon
					className="muidocs-icon-action-home"
					color={blue500}
					containerElement={<Link to="/" />} 
					linkButton={true}
				/>
				<IconButton 
					tooltip="Home"
					backgroundColor="#a6bac5" 
					label="Home"
					containerElement={<Link to="/" />} 
					linkButton={true}	  
					style={{fontFamily: "Raleway"}} 
					fontFamily="Raleway"
					>
						<FontIcon 
							className="muidocs-icon-action-home"
							color={blue500}
							containerElement={<Link to="/" />} 
							linkButton={true}
						/>
				</IconButton> */}

				{props.currentUser
					? (
						<span>
							<RaisedButton 
								className="navProBtn"
								backgroundColor="#a6bac5" 
								label="Profile"
								containerElement={<Link to="/profile" />} 
								linkButton={true}  
								style={{fontFamily: "Raleway"}} 
								fontFamily="Raleway"
							/>
							{/* <RaisedButton 
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
							/> */}
							<RaisedButton 
								className="navLogOutBtn"
								backgroundColor="#a6bac5" 
								label="Log Out"
								containerElement={<Link to="/logout" />} 
								linkButton={true}  
								style={{fontFamily: "Raleway"}} 
								fontFamily="Raleway"
							/>
						</span>
					)
					: (
						<span>
							<RaisedButton 
								className="navLogInBtn"
								backgroundColor="#a6bac5" 
								label="Log In"
								containerElement={<Link to="/login" />} 
								linkButton={true}  
							/>
							<RaisedButton 
								className="navSignUpBtn"
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
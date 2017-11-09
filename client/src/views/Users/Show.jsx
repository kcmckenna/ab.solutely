import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

const Show = (props) => {
	return (
		<div className='Show'>
			<h2>Welcome {props.currentUser.name}</h2>
			<RaisedButton 
			backgroundColor="#449EE3" 
			label="Edit"
			containerElement={<Link to="/edit" />} 
			linkButton={true}  
			/>
			<h3>{props.currentUser.about}</h3>
			<h4>What type are you feeling today?</h4>
			<RaisedButton 
			backgroundColor="#449EE3" 
			label="Type A"
			containerElement={<Link to="/makeplan" />} 
			linkButton={true}  
			/>
			<RaisedButton 
			backgroundColor="#449EE3" 
			label="Type B"
			containerElement={<Link to="/plans" />} 
			linkButton={true}  
			/>
		</div>
	)
}

export default Show

	// <FloatingActionButton >
	// 	<ContentAdd />
	// </FloatingActionButton>
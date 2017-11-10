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
	<Paper zDepth={2}>
	<br/>
		<div className='Show'>
			<br/>
			<h2>Welcome {props.currentUser.name}</h2>
			<h3>{props.currentUser.about}</h3>
			<h4>What type are you feeling today?</h4>
			<RaisedButton 
				className="typeA"
				backgroundColor="#426de0" 
				label="Type A"
				containerElement={<Link to="/makeplan" />} 
				linkButton={true}  
			/>
			<RaisedButton 
				className="typeB"
				backgroundColor="#e04242" 
				label="Type B"
				containerElement={<Link to="/plans" />} 
				linkButton={true}  
			/>
			<Divider />
			<br/>
			<RaisedButton 
				className="editProBtn"
				backgroundColor="#449EE3" 
				label="Edit Account"
				containerElement={<Link to="/edit" />} 
				linkButton={true}  
			/>
		</div>
		<Divider />
		<br/>
	</Paper>
	)
}

export default Show
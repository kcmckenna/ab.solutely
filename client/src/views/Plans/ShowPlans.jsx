import React from 'react';
import { Link } from 'react-router-dom'
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


const ShowPlans = (props) => {
	return (
		<div className='ShowPlans'>
			<h1>List of Plans</h1>
			<h2>Welcome {props.currentUser.name}</h2>
			<Link to="./TypeA">TYPE A</Link>
			<Link to="./TypeB">TYPE B</Link>
		</div>
	)
}

export default ShowPlans;
import React from 'react';
import { Link } from 'react-router-dom';

const Show = (props) => {
	return (
		<div className='Show'>
			<h1>ab.solutely</h1>
			<h2>Welcome {props.currentUser.name}</h2>
			<h3>{props.currentUser.about}</h3>
			<Link to="./TypeA">TYPE A</Link>
			<Link to="./TypeB">TYPE B</Link>
		</div>
	)
}

export default Show
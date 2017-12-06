import React from 'react';
// import { Link } from 'react-router-dom';

const TypeB = (props) => {
	return (
		<div className='TypeB'>
			<h1>Type B</h1>
			<h2>Welcome {props.currentUser.name}</h2>
		</div>
	)
}

export default TypeB
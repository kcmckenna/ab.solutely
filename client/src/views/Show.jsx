import React from 'react'
import { Link } from 'react-router-dom'

const Show = (props) => {
	return (
		<div className='Show'>
			<h1>Welcome to the your Profile!</h1>
			<h2>{props.currentUser.name}</h2>
				<Link to="/edit">Edit</Link>
				<Link to="/delete">Delete</Link>
		</div>
	)
}

export default Show
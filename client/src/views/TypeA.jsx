import React from 'react'
import { Link } from 'react-router-dom'

const TypeA = (props) => {
	return (
		<div className='TypeA'>
			<h1>Type A</h1>
			<h2>Welcome {props.currentUser.name}</h2>
		</div>
	)
}

export default TypeA
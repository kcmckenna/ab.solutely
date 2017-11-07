import React from 'react'
import { Link } from 'react-router-dom'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';


const TypeA = (props) => {
	return (
		<div className='TypeA'>
			<h1>Type A</h1>
			<h2>Welcome {props.currentUser.name}</h2>
			<DatePicker hintText="Landscape Dialog" mode="landscape" />
			<FloatingActionButton >
				<ContentAdd />
			</FloatingActionButton>
		</div>
	)
}

export default TypeA



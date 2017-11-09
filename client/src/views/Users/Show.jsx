import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const Show = (props) => {
	return (
		<div className='Show'>
			<h1>ab.solutely</h1>
			<h2>Welcome {props.currentUser.name}</h2>
			<h3>{props.currentUser.about}</h3>
			<Link to="/edit">Edit</Link>
			<Link to="/plans">Tybe B (See Plans)</Link>
			<Link to="/makeplan">Type A (Make Plan)</Link>
			<FloatingActionButton >
				<ContentAdd />
			</FloatingActionButton>
			{/* <Link to="./TypeA">TYPE A</Link>
			<Link to="./TypeB">TYPE B</Link> */}
		</div>
	)
}

export default Show
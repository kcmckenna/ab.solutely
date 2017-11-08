import React from 'react';
import { Link } from 'react-router-dom';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import DatePicker from 'material-ui/DatePicker';
import clientAuth from '../clientAuth'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

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


class MakePlan extends React.Component {
	state = {
		fields: { title: '', timeStart: '', timeEnd: '', dateStart: '', dateEnd: '', user: {} }
	}

	onInputChange(evt) {
		this.setState({
			fields: {
				...this.state.fields,
				[evt.target.name]: evt.target.value
			}
		})
	}

	onFormSubmit(evt) {
		
		evt.preventDefault()
		clientAuth.makePlan(this.state.fields).then(plan => {
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(plan) {
				this.props.onPlanSuccess(plan)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { title, timeStart, timeEnd, dateStart, dateEnd, user } = this.state.fields
		return (
			<Paper zDepth={2}>
			 	<div className='MakePlan'>
					<h2>Make a Plan</h2>
					<Divider />	
					<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
						<input type="text" placeholder="Title" name="name" value={title} />
					<Divider />
						<input type="text" placeholder="Time Start" name="time-start" value={timeStart} />	
					<Divider />
						<input type="text" placeholder="Time End" name="time-end" value={timeEnd} />
					<Divider />
						<input type="text" placeholder="Date Start" name="date-start" value={dateStart} />	
					<Divider />
						<input type="text" placeholder="Date End" name="date-end" value={dateEnd} />
					<Divider />
					<RaisedButton backgroundColor="#449EE3" label="SIGN UP"  />
						<button>Join Now</button>
					<Divider />
					</form>
				</div>
			</Paper>
		)
	}
}

export default TypeA



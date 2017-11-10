import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import clientAuth from '../../clientAuth';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditPlan extends React.Component {
	state = {
		fields: { 
			title: '', 
			place: '',
            timeStart: '', 
            timeEnd: '', 
            dateStart: '', 
            dateEnd: ''
        }
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
		clientAuth.signUp(this.state.fields).then(user => {
            this.setState({ 
                fields: { 
					title: '', 
					place: '',
                    timeStart: '', 
                    timeEnd: '', 
                    dateStart: '', 
                    dateEnd: ''
                } 
            })
			if(user) {
				// this.props.onSignUpSuccess(user)
				// this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { title, place, timeStart, timeEnd, dateStart, dateEnd } = this.state.fields
		return (
			<Paper zDepth={2}>
			<div className='EditPlan'>
				<h1>Edit an Event</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Title" name="title" value={title} />
					<input type="text" placeholder="Place" name="place" value={place} />
					<input type="text" placeholder="Time Start" name="timestart" value={timeStart} />
                    <input type="text" placeholder="Time End" name="timeend" value={timeEnd} />
                    <input type="text" placeholder="Date Start" name="datestart" value={dateStart} />
                    <input type="text" placeholder="Date End" name="dateend" value={dateEnd} />
					<button>Edit the Event</button>
					<RaisedButton 
						backgroundColor="#a6bac5" 
						label="Delete Plan"
						containerElement={<Link to="/deleteplan" />} 
						linkButton={true}  
					/>
				</form>
			</div>
			</Paper>
		)
	}
}


export default EditPlan;
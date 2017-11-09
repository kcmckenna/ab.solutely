import React from 'react';
import clientAuth from '../../clientAuth';
import axios from 'axios';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class MakePlan extends React.Component {
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
		axios({
			method: 'post',
			url: '/api/plans',
			data: this.state.fields
		}).then((plan) => {
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
			if(plan) {
				console.log(plan)
				this.props.history.push('/profile')
			}
		})
	}
	
	render() {
		const { title, place, timeStart, timeEnd, dateStart, dateEnd } = this.state.fields
		return (
			<div className='MakePlan'>
				<h1>Create Event</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Title" name="title" value={title} />
					<input type="text" placeholder="Place" name="place" value={place} />
					<input type="time" placeholder="Time Start" name="timeStart" value={timeStart} />
                    <input type="time" placeholder="Time End" name="timeEnd" value={timeEnd} />
                    <input type="date" placeholder="Date Start" name="dateStart" value={dateStart} />
                    <input type="date" placeholder="Date End" name="dateEnd" value={dateEnd} />
					<button>Make Event</button>
				</form>
			</div>
		)
	}
}

export default MakePlan;
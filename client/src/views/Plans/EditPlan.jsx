import React from 'react';
import clientAuth from '../clientAuth';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class EditPlan extends React.Component {
	state = {
		fields: { 
            title: '', 
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
		const { title, timeStart, timeEnd, dateStart, dateEnd } = this.state.fields
		return (
			<div className='MakePlan'>
				<h1>Create Event</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Title" name="title" value={title} />
					<input type="text" placeholder="Time Start" name="timestart" value={timeStart} />
                    <input type="text" placeholder="Time End" name="timeend" value={timeEnd} />
                    <input type="text" placeholder="Date Start" name="datestart" value={dateStart} />
                    <input type="text" placeholder="Date End" name="dateend" value={dateEnd} />
					<button>Make Event</button>
				</form>
			</div>
		)
	}
}


export default EditPlan;
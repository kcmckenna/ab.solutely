import React from 'react';
import clientAuth from '../../clientAuth';
import axios from 'axios'

class MakePlan extends React.Component {
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
					<input type="number" placeholder="Time Start" name="timeStart" value={timeStart} />
                    <input type="number" placeholder="Time End" name="timeEnd" value={timeEnd} />
                    <input type="number" placeholder="Date Start" name="dateStart" value={dateStart} />
                    <input type="number" placeholder="Date End" name="dateEnd" value={dateEnd} />
					<button>Make Event</button>
				</form>
			</div>
		)
	}
}

export default MakePlan;
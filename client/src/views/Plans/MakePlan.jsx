import React from 'react';
import clientAuth from '../../clientAuth';
import axios from 'axios';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

class MakePlan extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			fields: { 
				title: '', 
				place: '',
				timeStart: '', 
				timeEnd: '', 
				dateStart: ''
			},
			suggestions: []
		}
	}

	onInputChange(evt) {
		this.setState({
			suggestions: [
				"Pizza", "Tacos", "Pizza Taco!?"
			],
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
                    dateStart: ''
                } 
            })
			if(plan) {
				console.log(plan)
				this.props.history.push( {pathname: '/plans', state: {title: 'title time'}})

			}
		})
	}

	handleUpdateInput = (value) => {
		this.setState({ fields: {...this.state.fields, place: value} })
		axios(`/yelp-autocomplete/${value}`).then(res => {
			this.setState({
				suggestions: res.data.terms.map((result) => { return result.text })
			})
		})
	};
	
	render() {
		const { title, place, timeStart, timeEnd, dateStart } = this.state.fields
		console.log()
		return (
			<Paper zDepth={2}>
			<div className='MakePlan'>
				<h1>Create Event</h1>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					
					<div>Title</div><input type="text" placeholder="" name="title" value={title} />
					<br />
					{/* <div>Place</div><input type="text" placeholder="" name="place" value={place} /> */}
					<AutoComplete
						dataSource={this.state.suggestions}
						name="place"
						hintText="Place"
						onUpdateInput={this.handleUpdateInput.bind(this)}
						filter={() => true}
					/>
					<br />
					<div>Start @</div><input type="time" placeholder="Time Start" name="timeStart" value={timeStart} />
					<br />
                    <div>End @</div> <input type="time" placeholder="Time End" name="timeEnd" value={timeEnd} />
					<br />
                    <div>Date</div><input type="date" placeholder="Date Start" name="dateStart" value={dateStart} />
					<br />
					<div>
						<br/>
						<button>Make Event</button>
						<br/>
					</div>
					<br />
				</form>
			</div>
			</Paper>
		)
	}
}

export default MakePlan;
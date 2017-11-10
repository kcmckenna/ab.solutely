import React from 'react';
import clientAuth from '../../clientAuth';
import axios from 'axios';
import { Link } from 'react-router-dom';
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
			<br />
			<div className='MakePlan'>
				<br/>
				<h1>Create Event</h1>
				<br/>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<div>Name of Event</div><input type="text" placeholder="" name="title" value={title} />
					<br />
					<AutoComplete
						dataSource={this.state.suggestions}
						name="place"
						hintText="Place"
						onUpdateInput={this.handleUpdateInput.bind(this)}
						filter={() => true}
					/>
					<br />
					<div>Start @</div>
					<input type="time" placeholder="Time Start" name="timeStart" value={timeStart} />
					<br />
                    <div>End @</div> 
					<input type="time" placeholder="Time End" name="timeEnd" value={timeEnd} />
					<br />
                    <div>Date</div>
					<input type="date" placeholder="Date Start" name="dateStart" value={dateStart} />
					<br />
					<div>
						<br/>
							{/* Need this to submit with enter key... */}
							<button style={{display: 'none'}}>Make the Plan</button>
						<br/>
					</div>
					<br/>
					<RaisedButton 
						className="makePlanBtn"
						backgroundColor="#449EE3" 
						label="Make Plan"
						containerElement={<Link to="/plans" />} 
						linkButton={true}  
						onClick={this.onFormSubmit.bind(this)}
					/>
					<Divider />
					<br />
					<RaisedButton 
						className="typeB"
						backgroundColor="#e04242" 
						label="All Plans"
						containerElement={<Link to="/plans" />} 
						linkButton={true}  
					/>
					<Divider />
					<br/>
				</form>
			</div>
			</Paper>
		)
	}
}

export default MakePlan;
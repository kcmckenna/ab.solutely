import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import clientAuth from '../../clientAuth';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';


class ShowPlans extends React.Component {

	state = { plans: [] }
	
	handleOnDelete(plan) {
		console.log(plan._id)
		axios({
			method:'delete',
			url:`/api/plans/${plan._id}`
		}).then(res => {
			console.log(res.data);
			const deletePlan = res.data.deletedPlan
			this.setState({
				plans: this.state.plans.filter(deletePlan => {
					return deletePlan._id != plan._id
				})
			})
		})
	}

	handleOnEdit(plan) {
		console.log(plan._id)
		axios({
			method: 'patch',
			url: `/api/plans/${plan._id}`
		}).then (res => {
			console.log(res.data);
			const editThisPlan = res.data.updatedPlan
		})
	}


	componentDidMount() {
		axios('/api/plans').then(res => {
			this.setState({ plans: res.data })
		})
	}

	render() {
		return (
			<Paper zDepth={2}>
			<div className='ShowPlans'>
				<h1>List of Plans</h1>
				<h3> this is where the list of all plans should be viewed </h3>
				<ul>
					{this.state.plans.map(plan => {
						return (
							<li key={plan._id}>
								{plan.title} - {plan.place}
								<RaisedButton 
									backgroundColor="#a6bac5" 
									label="Edit Plan"
									containerElement={<Link to="/editplan" />} 
									linkButton={true}
								/>
								<RaisedButton 
									backgroundColor="#a6bac5" 
									label="Delete Plan"
									/* containerElement={<Link to="/deleteplan" />}  */
									linkButton={true}
									onClick={(() => {this.handleOnDelete(plan)})}
								/>
							</li>
						)
					})}
				</ul>
				<RaisedButton 
					backgroundColor="#449EE3" 
					label="Make Plans"
					containerElement={<Link to="/makeplan" />} 
					linkButton={true}  
				/>
			</div>
			</Paper>
		)
	}
}

export default ShowPlans;
import React from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import clientAuth from '../../clientAuth';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
// import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class ShowPlans extends React.Component {

	state = { plans: [] }
	
////////////// FUNCTIONS ///////////////////

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
					return deletePlan._id !== plan._id
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
			<br/>
			<div className='ShowPlans'>
				<br/>
				<h1>Plans List</h1>
				<h3>Do you want to...</h3>
				<br/>
				<ul>
					{this.state.plans.map(plan => {
						return (
							<li key={plan._id} className="planitem">
								{plan.title} @ {plan.place}
								<br/>
								{/* <RaisedButton 
									className="editPlanBtn"
									backgroundColor="#449EE3" 
									label="Edit Plan"
									containerElement={<Link to="/editplan" />} 
									linkButton={true}
								/> */}
								<RaisedButton 
									className="deletePlanBtn"
									backgroundColor="#e56161" 
									label="Delete Plan"
									/* containerElement={<Link to="/deleteplan" />}  */
									linkButton={true}
									onClick={(() => {this.handleOnDelete(plan)})}
								/>
							</li>
							)
						}
					)}
					<br/>
				</ul>
			</div>
			<Divider />
				<RaisedButton 
					className="makePlanBtn"
					backgroundColor="#426de0" 
					label="Make Plans"
					containerElement={<Link to="/makeplan" />} 
					linkButton={true}  
				/>
			<br/>
			<Divider />
			<br/>
		</Paper>
		)
	}
}

export default ShowPlans;
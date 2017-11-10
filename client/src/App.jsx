import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import clientAuth from './clientAuth.js';
////////////// MATERIAL-UI IMPORTS ///////////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import AppBar from 'material-ui/AppBar';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
//////////////// JOINING ////////////////////
import NavBar from './NavBar.jsx';
import Home from './views/Home.jsx';
import LogIn from './views/Users/LogIn.jsx';
import LogOut from './views/Users/LogOut.jsx';
import SignUp from './views/Users/SignUp.jsx';
//////////////// USERS ////////////////////
import Show from './views/Users/Show.jsx';
import EditProfile from './views/Users/Edit.jsx';
import DeleteProfile from './views/Users/Delete.jsx';
//////////////// TYPES ////////////////////
import TypeA from './views/TypeA.jsx';
import TypeB from './views/TypeB.jsx';
//////////////// EVENTS ////////////////////
import MakePlan from './views/Plans/MakePlan.jsx';
import ShowPlans from './views/Plans/ShowPlans.jsx';
import EditPlan from './views/Plans/EditPlan.jsx';
import DeletePlan from './views/Plans/DeletePlan.jsx';


class App extends React.Component {
	state = { currentUser: null }

	componentDidMount() {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
	}

	onLoginSuccess(user) {
		this.setState({ currentUser: clientAuth.getCurrentUser() })
	}

	logOut() {
		clientAuth.logOut()
		this.setState({ currentUser: null })
	}

	onUpdateUser(name){
		this.setState({
			name: this.data.userData.name
		})
	}
	
	render() {
		const { currentUser } = this.state
		return (
			<MuiThemeProvider >
				<div className='App'>
					<NavBar currentUser={currentUser} />
					<Switch>
						<Route path="/login" render={(props) => {
							return <LogIn 
								{...props} 
								onLoginSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/logout" render={(props) => {
							return <LogOut 
								onLogOut={this.logOut.bind(this)} />
						}} />

							{/* Sign Up component takes an 'onSignUpSuccess' prop 
							which will perform the same thing as onLoginSuccess: 
							set the state to contain the currentUser */}

						<Route path="/signup" render={(props) => {
							return <SignUp 
								{...props} 
								onSignUpSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/profile" render={() => {
							return currentUser
								? <Show currentUser={currentUser} />
								: <Redirect to="/login" />
						}} />

						<Route path="/edit" render={(props) => {
							return currentUser
								? <EditProfile {...props} 
									currentUser={currentUser} 
									onUpdateSuccess={this.onLoginSuccess.bind(this)}
									onUpdateUser={this.onUpdateUser.bind(this)}
								/>
								: <Redirect to="/login" />
						}} />

						<Route path="/delete" render={(props) => {
							return currentUser
								? <DeleteProfile 
									currentUser={currentUser} 
									onDeleteSuccess={this.logOut.bind(this)} />
								: <Redirect to="/login" />
						}} />	

						{/* Route Paths for the events/plans made */}

						<Route path="/plans" render={() => {
							return currentUser
								? <ShowPlans 
									currentUser={currentUser} />
								: <Redirect to="/login" />
						}} />

						<Route path="/makeplan" render={(props) => {
							return currentUser
								? <MakePlan 
									{...props} 
									currentUser={currentUser} />
								: <Redirect to="/login" />
						}} />

						<Route path="/editplan" render={() => {
							return currentUser
								? <EditPlan 
									currentUser={currentUser} 
									onUpdateSuccess={this.onLoginSuccess.bind(this)}
									/* onUpdatePlan={this.onUpdatePlan.bind(this)}  */
								/>
								: <Redirect to="/login" />
						}} />

						<Route path="/deleteplan" render={(props) => {
							return currentUser
								? <DeletePlan 
									currentUser={currentUser} 
									onDeleteSuccess={this.logOut.bind(this)} />
								: <Redirect to="/login" />
						}} />	

						<Route path="/" component={Home} />
					</Switch>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
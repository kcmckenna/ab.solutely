import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import clientAuth from './clientAuth.js'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'

import NavBar from './NavBar'
import LogIn from './views/LogIn'
import LogOut from './views/LogOut'
import SignUp from './views/SignUp'
import Show from './views/Show'
import Home from './views/Home'
import EditProfile from './views/Edit'
import DeleteProfile from './views/Delete'
import TypeA from './views/TypeA'
import TypeB from './views/TypeB'


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
							return <LogIn {...props} onLoginSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/logout" render={(props) => {
							return <LogOut onLogOut={this.logOut.bind(this)} />
						}} />

						{/* the sign up component takes an 'onSignUpSuccess' prop which will perform the same thing as onLoginSuccess: set the state to contain the currentUser */}
						<Route path="/signup" render={(props) => {
							return <SignUp {...props} onSignUpSuccess={this.onLoginSuccess.bind(this)} />
						}} />

						<Route path="/profile" render={() => {
							return currentUser
								? <Show 
									currentUser={currentUser} 

								/>
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
								? <DeleteProfile currentUser={currentUser} onDeleteSuccess={this.logOut.bind(this)} />
								: <Redirect to="/login" />
						}} />	

						{/* <Route path="" render={(props) => {

						}} /> */}

						<Route path="/" component={Home} />

					</Switch>
					
				</div>
			</MuiThemeProvider>
		)
	}
}

export default App
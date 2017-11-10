import React from 'react';
import { Link } from 'react-router-dom';
import clientAuth from '../../clientAuth';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import {fullWhite} from 'material-ui/styles/colors';
import ActionAndroid from 'material-ui/svg-icons/action/android';
import FontIcon from 'material-ui/FontIcon';

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
	}

////////////// FUNCTIONS ///////////////////

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
		clientAuth.logIn(this.state.fields).then(user => {
			this.setState({ fields: { email: '', password: '' } })
			if(user) {
				this.props.onLoginSuccess(user)
				this.props.history.push('/profile')
			}
		})
	}
	
	render() {
		const { email, password } = this.state.fields
		return (
			<Paper zDepth={2}>
			<div className='LogIn'>
				<br/>
				<h2>Log In</h2>
				<br/>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<div>Email</div>
					<input type="text" placeholder="" name="email" value={email} />
					<div>Password</div>
					<input type="password" placeholder="" name="password" value={password} />
					<br/>
					<RaisedButton
						className="loginBtn"
						style={{marginTop: 20}} 
						backgroundColor="#449EE3" 
						label="LOG IN"
						containerElement={<Link to="/login" />} 
						linkButton={true}  
						onClick={this.onFormSubmit.bind(this)}
					/>
					<br/>
					{/* Need this to submit with enter key... */}
					<button style={{display: 'none'}}>Log In</button>
					<br/>
					<Divider />
					<br/>
				</form>
			</div>
			</Paper>
		)
	}
}

export default LogIn
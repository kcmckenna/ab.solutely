import React from 'react';
import clientAuth from '../../clientAuth';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class LogIn extends React.Component {
	state = {
		fields: { email: '', password: ''}
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
				<h2>Log In</h2>
				<Divider />
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
					<input type="text" placeholder="Email" name="email" value={email} />
					<Divider />
					<input type="password" placeholder="Password" name="password" value={password} />
					<Divider />
					<RaisedButton backgroundColor="#449EE3" label="LOG IN" />
					<button>Log In</button>
					<Divider />
				</form>
			</div>
			</Paper>
		)
	}
}

export default LogIn
import React from 'react'
import clientAuth from '../clientAuth'
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

// Sign up form behaves almost identically to log in form. 
// We could create a flexible Form component to use for both actions, 
// but for now we'll separate the two:

class SignUp extends React.Component {
	state = {
		fields: { name: '', email: '', password: '' }
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
			this.setState({ fields: { name: '', email: '', password: '' } })
			if(user) {
				this.props.onSignUpSuccess(user)
				this.props.history.push('/')
			}
		})
	}
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<Paper zDepth={2}>
			 	<div className='SignUp'>
					<h2>Sign Up</h2>
					<Divider />	
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<input type="text" placeholder="Name" name="name" value={name} />
							<Divider />
							<input type="text" placeholder="Email" name="email" value={email} />	
							<Divider />
							<input type="password" placeholder="Password" name="password" value={password} />
							<Divider />
						<RaisedButton backgroundColor="#449EE3" label="SIGN UP"  />
						<button>Join Now</button>
					<Divider />
					</form>
				</div>
			</Paper>
		)
	}
}

export default SignUp
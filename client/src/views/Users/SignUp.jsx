import React from 'react';
import clientAuth from '../../clientAuth';
import { Link } from 'react-router-dom';
////////////// MATERIAL-UI IMPORTS ///////////////////
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import AutoComplete from 'material-ui/AutoComplete';

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
			this.setState({ 
				fields: { 
					name: '', 
					email: '', 
					password: '' 
				} 
			})
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
			<br/>
			 	<div className='SignUp'>
					<h2>Sign Up</h2>
					<Divider />	
						<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
							<div>Name</div><input type="text" placeholder="" name="name" value={name} />
							<Divider />
							<div>Email</div><input type="text" placeholder="" name="email" value={email} />	
							<Divider />
							<div>Password</div><input type="password" placeholder="" name="password" value={password} />
							<Divider />
							<br/>
						<RaisedButton
							className="loginBtn" 
							backgroundColor="#449EE3" 
							label="Join Now"
							containerElement={<Link to="/login" />} 
							linkButton={true}  
							onClick={this.onFormSubmit.bind(this)}
						/>	
						{/* Need this to submit with enter key... */}
						<button style={{display: 'none'}}>Join Now</button>
					<Divider />
					<br/>
					</form>
					<br/>
				</div>
			</Paper>
		)
	}
}

export default SignUp


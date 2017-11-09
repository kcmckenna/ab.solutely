import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import RaisedButton from 'material-ui/RaisedButton';

class EditProfile extends React.Component {

	state = {
		fields: { name: '', email: '', password: ''}
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
		console.log("UPDATE USER")
        evt.preventDefault()
        axios({
            method: 'patch',
            url: `/api/users/${this.props.currentUser._id}`,
            data: this.state.fields
        }).then ((user) => {
			console.log("-------- USER OBJ ----------")
			console.log(user)
			console.log(user.data.userData.name)
			console.log("------------------------------")
			this.props.onUpdateUser(user.data.userData.name)
            this.setState({
                fields: {
					name:user.data.userData.name,
                    email: user.data.userData.email, 
                    password: user.data.userData.password
                }
            })
            if (user) {
                console.log(user)
                this.props.onUpdateSuccess(user)
				this.props.history.push('/profile')
            }
        })
    }
	
	render() {
		const { name, email, password } = this.state.fields
		return (
			<div className='EditProfile'>
				<h2>Edit Profile</h2>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div>Name</div><input type="text" placeholder="Name" name="name" defaultValue={name} /> 
					<div>Email</div><input type="text" placeholder="Email" name="email" defaultValue={email} />
					<div>Password</div><input type="password" placeholder="Password" name="password" defaultValue={password} />
					<button>Update</button>
					<Link to="/delete">Delete</Link>
				</form>
			</div>
		)
	}
}

export default EditProfile
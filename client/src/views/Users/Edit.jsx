import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import RaisedButton from 'material-ui/RaisedButton';

class EditProfile extends React.Component {

	state = {
		fields: { name: '', 
			email: '',
			password: ''},
		loaded: false,
		
	}

////////////// FUNCTIONS ///////////////////

	componentDidMount() {
        axios({ method: 'get', url: "/api/users" })
        .then((res) => {
            // console.log(res)
			this.setState({
				...this.state,
				user: res.data,
				loaded: true
			})
        })
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
		console.log(this.props)
		const { name, email, password } = this.state.fields
		const { loaded } = this.state
        // console.log(this.props)
        if(!loaded) return <div>Loading...</div>

		return (
			<Paper zDepth={2}>
			<br />
			<div className='EditProfile'>
				<br/>
				<h2>Edit Profile</h2>
				<br/>
				<form onChange={this.onInputChange.bind(this)} onSubmit={this.onFormSubmit.bind(this)}>
                    <div>Name</div>
					<input type="text" placeholder="Name" name="name" defaultValue={name} /> 
					<div>Email</div>
					<input type="text" placeholder="Email" name="email" defaultValue={email} />
					<div>Password</div>
					<input type="password" placeholder="Password" name="password" defaultValue={password} />
					<br/>
					<div>
						<button style={{display: 'none'}}>Update</button>
					</div>
					<br/>
					<RaisedButton 
						className="editBtn"
						backgroundColor="#449EE3" 
						label="Update Account"
						containerElement={<Link to="/profile" />} 
						linkButton={true}  
						onClick={this.onFormSubmit.bind(this)}
					/>	
					<br/>
					<Divider />
					<br/>
					<RaisedButton 
						className="deleteBtn"
						backgroundColor="#e56161" 
						label="Delete Account"
						containerElement={<Link to="/delete" />} 
						linkButton={true}  
					/>
					<br/>
					<Divider />
					<br/>
				</form>
			</div>
			</Paper>
		)
	}
}

export default EditProfile
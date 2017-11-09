import React from 'react';
//////////////////////// MATERIAL UI ///////////////////////
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';


const Home = (props) => {
	return (
		<div className='Home'>
			<Paper zDepth={3}>
			<span className='AB'>ab</span><span className='period'>.</span><span className='solutely'>solutely</span>
			<br/>	
			<img src={require('../AB_logo.png')} alt="logo" />
			</Paper>
		</div>
	)
}

export default Home
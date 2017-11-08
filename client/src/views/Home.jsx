import React from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';


const Home = (props) => {
	return (
		<div className='Home'>
			<span className='AB'>ab</span><span className='period'>.</span><span className='solutely'>solutely</span>
			<br/>
			<img src={require('../AB_logo.png')} alt="logo" />
			<FloatingActionButton >
				<ContentAdd />
			</FloatingActionButton>
		</div>
	)
}

export default Home
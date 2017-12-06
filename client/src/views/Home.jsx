import React from 'react';
import { Link } from 'react-router-dom';
//////////////////////// MATERIAL UI ///////////////////////
// import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
// import getMuiTheme from 'material-ui/styles/getMuiTheme';
// import FloatingActionButton from 'material-ui/FloatingActionButton';
// import ContentAdd from 'material-ui/svg-icons/content/add';
// import Divider from 'material-ui/Divider';
import Paper from 'material-ui/Paper';
// import FontIcon from 'material-ui/FontIcon';
// import {blue500, red500, greenA200} from 'material-ui/styles/colors';
// import IconButton from 'material-ui/IconButton';
import IconLocationOn from 'material-ui/svg-icons/communication/location-on';
// import ActionHome from 'material-ui/svg-icons/action/home';
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation';

const nearbyIcon = <IconLocationOn />;

const Home = (props) => {
	return (
		<div className='Home'>
			<Paper zDepth={3}>
			<span className='AB'>ab</span><span className='period'>.</span><span className='solutely'>solutely</span>
			<br/>	
			<img src={require('../AB_logo.png')} alt="logo" />
			</Paper>
			<BottomNavigation>
			<BottomNavigationItem
				label="Find a Place + Make Plans"
				icon={nearbyIcon}
				onClick={<Link to="/makeplan" />}
			/>
			</BottomNavigation>
		</div>
	)
}

export default Home
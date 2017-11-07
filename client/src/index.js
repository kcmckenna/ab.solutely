import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import getMuiTheme from 'material-ui/styles/getMuiTheme'
import AppBar from 'material-ui/AppBar'
import './styles.css'

import App from './App'

ReactDOM.render(
	<Router><MuiThemeProvider><App /></MuiThemeProvider></Router>,
	document.getElementById('root')
)
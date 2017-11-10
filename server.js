const
	dotenv = require('dotenv').load(),
	express = require('express'),
	app = express(),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	mongoose = require('mongoose'),
	MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/absolutely',
	PORT = process.env.PORT || 3001,
	usersRoutes = require('./routes/users.js'),
	plansRoutes = require('./routes/plans'),
	yelp = require('yelp-fusion'),
	clientId = process.env.YELP_CLIENT_ID
	clientSecret = process.env.YELP_API_KEY

///////////////////// YELP API ////////////////////////////
var theToken = null
	
const token = yelp.accessToken(clientId, clientSecret).then(response => {
	 console.log(response.jsonBody.access_token)
	 theToken = response.jsonBody.access_token
		}).catch(e => {
			console.log(e)
		})
   
app.get('/yelp/:term/:city', (req, res) => {
	const client = yelp.client(theToken)
	client.search({
		term: req.params.term,
		location: req.params.city
	  }).then(response => {
			console.log(response.jsonBody.businesses)
			res.json(response.jsonBody)
			}).catch(e => {
			console.log(e);
	  });
})

app.get('/yelp-autocomplete/:term', (req, res) => {
	const client = yelp.client(theToken)
	client.autocomplete({
		text: req.params.term
	  }).then(response => {
			console.log(response.jsonBody.terms[0].text);
			res.json(response.jsonBody)
			}).catch(e => {
			console.log(e);
	  });
})
/////////////////////////////////////////////////////////

///////////////////// CONNECT TO DB /////////////////////
mongoose.connect(MONGODB_URI, (err) => {
	console.log(err || `Connected to MongoDB.`)
})

app.use(express.static(`${__dirname}/client/build`))
// only applies to heroku ^^^
app.use(logger('dev'))
app.use(bodyParser.json())

app.get('/api', (req, res) => {
	res.json({message: "API root."})
})

app.use('/api/users', usersRoutes)
app.use('/api/plans', plansRoutes)

// Below only applies to heroku once it's 
// finished deploying and builds app on backend

app.use('*', (req, res) => {
	res.sendFile(`${__dirname}/client/build/index.html`)
})

app.listen(PORT, (err) => {
	console.log(err || `Server running on port ${PORT}.`)
})
/////////////////////////// GET ACCESS TOKEN

'use strict';

const yelp = require('yelp-fusion');

yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

/////////////////////////// AUTOCOMPLETE

'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(token);

client.autocomplete({
  text:'pizza'
}).then(response => {
  console.log(response.jsonBody.terms[0].text);
}).catch(e => {
  console.log(e);
});

/////////////////////////// SEARCH

'use strict';

const yelp = require('yelp-fusion');

const client = yelp.client(token);

client.search({
  term:'Four Barrel Coffee',
  location: 'san francisco, ca'
}).then(response => {
  console.log(response.jsonBody.businesses[0].name);
}).catch(e => {
  console.log(e);
});

//////////////// Or get access token and search at the same time

'use strict';

const yelp = require('yelp-fusion');

yelp.accessToken(clientId, clientSecret).then(response => {
  const client = yelp.client(response.jsonBody.access_token);

  client.search({
    term:'Four Barrel Coffee',
    location: 'san francisco, ca'
  }).then(response => {
    console.log(response.jsonBody.businesses[0].name);
  });
}).catch(e => {
  console.log(e);
});
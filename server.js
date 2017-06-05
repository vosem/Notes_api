var express = require('express'),
	MongoClient = require('mongodb').MongoClient,
	bodyParser = require('body-parser');
	db = require('./config/db');
var app = express();

const port = 8000;
app.use(bodyParser.urlencoded({ extended: true }));
MongoClient.connect(db.url, (err, database) => {
  if (err) return console.log(err)
require('./app/routes')(app, database);

app.listen(port, () => {
  console.log('We are live on ' + port);
});
})
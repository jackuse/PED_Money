// Module dependencies.
var application_root = __dirname,
	express = require('express'), //Web framework
	path = require('path'), //Utilities for dealing with file paths
	jwt  = require("jsonwebtoken"),
	bodyParser  = require('body-parser');

var database = require('./database')
var apiUser = require('./api-user')
var apiOperation = require('./api-operation')
var apiPeriod = require('./api-period')
// var apiTools = require('./api-tools')
// var apiOther = require('./api-other')
// var api = require('./api')

	

//Create server
var app = express();

// Configure server
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(application_root ,'../client')));
//Show all errors in development
//app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));*




var db = database.getDB()

db.on('error', console.error.bind(console, 'connection error:'));

db.once('open', function (callback) {
	//Start server
	var port = 8754;
	app.listen(port, function () {
		'use strict';
		console.log('Express server listening on port %d in %s mode', port, app.settings.env);
		console.log('application_root is %s',path.join(application_root ,'./client'));
	});
})



var userModel = database.getUserModel()

apiUser(app, userModel , jwt)
apiOperation(app, database.getOperationModel())
apiPeriod(app, database.getPeriodModel())




// Example

// module.exports = function (app, expenseModel) {
// 	app.get('/api/expense/', getAllExpenses)
// 	app.post('/api/expense/', addExpense)
// 	app.get('/api/expense/:id', getExpense)
// 	app.put('/api/expense/', getExpenseByTag)
// 	app.delete('/api/expense/:id', deleteExpense)
// 	app.post('/api/expense/:id', editExpense)


// 	function getAllExpenses(req, resp , next) {
// 		'use strict';
// 		var userId = req.get('X-User-Id');

// 		expenseModel.find({user: userId}, function (err, coll) {
// 			if (!err) {
// 				return resp.send(coll);
// 			} else {
// 				console.log(err);
// 				next(err);
// 			}
// 		});
// 	}
// }
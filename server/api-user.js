 module.exports = function (app, userModel) {
app.post('/api/user', getAllExpenses)
/*app.post('/api/expense/', addExpense)
app.get('/api/expense/:id', getExpense)
app.put('/api/expense/', getExpenseByTag)
app.delete('/api/expense/:id', deleteExpense)
app.post('/api/expense/:id', editExpense)*/


function getAllExpenses(req, resp , next) {
'use strict';
console.log(req.body);
	
		var User = { 
			username: req.body.name,
			lastName: req.body.last,
			firstName: req.body.first,
			email: req.body.mail,
			password: req.body.pass}

	var nouveauUser = new userModel(User);
	
	nouveauUser.save(function(err, doc) {
		if(err || !doc) {
			throw 'Error';
		} else {
			resp.json(doc);
		}		
	});	
		
}
}
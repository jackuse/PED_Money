module.exports = {
	getDB : function(){
		return db
	},
	 getUserModel: function(){
	 	return userModel
	}
	// getExpenseModel: function(){
	// 	return expenseModel
	// }
}


var mongoose = require('mongoose')

//Connect to database
mongoose.connect('mongodb://localhost/mymoney');
var db = mongoose.connection;


//Schemas
var Schema = mongoose.Schema;



var ExpenseSchema = new Schema({
	title: String,
	amount: Number,
	// from:[FriendLinkSchema],
	// to:[FriendLinkTrackSchema],
	date: Date,
	tags: [
		String
	],
	isEdit: Boolean,
	user: String
})

var UserSchema  = new Schema({
	id: String,
	username: String,
	lastName: String,
	firstName: String,
	email: String,
	password: String
})

console.log('init db end')

// ExpenseSchema.index( { user: 1 } )

//Models

var userModel = mongoose.model('userModel', UserSchema);
// var expenseModel = mongoose.model('expenseModel', ExpenseSchema);
module.exports = {
	getDB : function(){
		return db
	},
	getPeriodModel: function(){
		return periodModel
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

var PeriodSchema = new Schema({
	name: String,
	amount: Number,
	dateBegin: Date,
	nbRepeat: Number,
	step: Number,
	accountId: String,
	intervalType: String
})


// console.log('init db end')

// ExpenseSchema.index( { user: 1 } )

//Models

// var userModel = mongoose.model('userModel', UserSchema);
// var expenseModel = mongoose.model('expenseModel', ExpenseSchema);
var periodModel = mongoose.model('periodModel', PeriodSchema);
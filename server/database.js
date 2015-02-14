module.exports = {
    getDB : function(){
        return db
    }
    // getUserModel: function(){
    //  return userModel
    // },
    // getExpenseModel: function(){
    //  return expenseModel
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


var OperationSchema = new Schema({
    value: Number,
    thirdParty: String,
    description: String,
    type: String,
    checked: Boolean,
    dateOperation: Date,
    datePrelevement: Date,
    categoryId: Number/*,
    subOperations: []*/
})

console.log('init db end')

// ExpenseSchema.index( { user: 1 } )

//Models

var operationModel = mongoose.model('operationModel', OperationSchema);
// var userModel = mongoose.model('userModel', UserSchema);
// var expenseModel = mongoose.model('expenseModel', ExpenseSchema);
 module.exports = function (app, userModel,jwt) {
app.post('/api/user', addUser)
app.post('/api/authenticate', authenticate)
/*app.get('/api/compte',compte)
app.put('/api/expense/', getExpenseByTag)
app.delete('/api/expense/:id', deleteExpense)
app.post('/api/expense/:id', editExpense)*/

function addUser(req, res , next) {
'use strict';

	userModel.findOne({ username: req.body.name}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
                res.json({
                    type: false,
                    data: "User already exists!"
                });
            } else {
                var User = { 
						username: req.body.name,
						lastName: req.body.last,
						firstName: req.body.first,
						email: req.body.mail,
						password: req.body.pass}

				var nouveauUser = new userModel(User);
                nouveauUser.save(function(err, user) {
                    user.token = jwt.sign(user,user.email);
                    user.save(function(err, user1) {
                        res.json({
                            type: true,
                            data: user1,
                            token: user1.token
                        });
                    });
                })
            }

        }
    });
		
	}

function authenticate(req, res , next) {
	//console.log(req.body);

	userModel.findOne({username: req.body.username, password: req.body.password}, function(err, user) {
        if (err) {
            res.json({
                type: false,
                data: "Error occured: " + err
            });
        } else {
            if (user) {
               res.json({
                    type: true,
                    data: user,
                    token: user.token
                }); 
            } else {
                res.json({
                    type: false,
                    data: "Incorrect username/password"
                });    
            }

        }

    });
}

}
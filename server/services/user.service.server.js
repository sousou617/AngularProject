module.exports = function(app) {

  var userModel = require('../model/user/user.model.server.js');

  var passport = require('passport');
  passport.serializeUser(serializeUser);


  function serializeUser(user, done) {
    done(null, user);
}
  passport.deserializeUser(deserializeUser);

  function deserializeUser(user, done) {
    developerModel
        .findDeveloperById(user._id)
        .then(
            function(user){
                done(null, user);
            },
            function(err){
                done(err, null);
            }
        );
}

	app.get('/api/user', findUser);
	app.get('/api/user/:uid', findUserById);
	app.post('/api/user', createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);
  app.post ('/api/register', register);


function register (req, res) {
    var user = req.body;
    userModel.createUser(user).then(
            function(user){
               req.login(user, function(err) {
                   res.json(user);
               });
            });
}



//  find users by given ID: 

function findUserById(req, res) {
    var uid = req.params['uid'];
    userModel.findUserById(uid).then(
      (data) => {
        res.json(data);
      }
    )
    }


  function findUser(req, res) {
    const username = req.query['username'];
    const password = req.query['password'];
//  find user by credentials
    if (username && password) {
      userModel.findUserByCredentials(username, password).then(
        (data) => {
          res.json(data);
        }
      )
      return;
    }
//  find user by username
    if(username) {
      userModel.findUserByUsername(username).then(
        (data) => {
          res.json(data);
        }
      )
      return;
    }
    res.json(null);
  }
    
  function createUser(req, res) {
    var user = req.body;
    userModel.createUser(user).then(
      (data) => {
        res.json(data);
      }
      );
  }


	function updateUser(req, res) {
		var uid = req.params['uid'];
    var user = req.body;
    userModel.updateUser(uid, user).then(
      (data) => {
        res.json(data);
      }
    );
	}


	function deleteUser(req, res) {
		var uid = req.params['uid'];
		userModel.deleteUser(uid).then(
      (data) => {
         res.json(data);
      }
    );
     
	}
	
  
}
module.exports = function(app) {

  var userModel = require('../model/user/user.model.server.js');

	// var users = [
	// {_id: "123", username: "alice", password: "alice", firstName: "Alice", lastName: "Wonder", email: "alice@gmail.com"},
	// {_id: "234", username: "bob", password: "bob", firstName: "Bob", lastName: "Marley", email: "bob@whatever.com"},
	// {_id: "345", username: "charly", password: "charly", firstName: "Charly", lastName: "Garcia", email: "charly@hotmail.com"},
	// {_id: "456", username: "shiyu", password: "shiyu", firstName: "Shiyu", lastName: "Wang", email: "swang@ulem.org"}
	// ];

	app.get('/api/user', findUser);
	app.get('/api/user/:uid', findUserById);
	app.post('/api/user', createUser);
	app.put('/api/user/:uid', updateUser);
	app.delete('/api/user/:uid', deleteUser);

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
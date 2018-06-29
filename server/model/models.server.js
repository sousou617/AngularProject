var connectionString = 'mongodb://127.0.0.1:27017/web-maker'; // for local

// from Heroku
if(process.env.MLAB_USERNAME_WEBDEV) { // check if running remotely
  var username = process.env.MLAB_USERNAME_WEBDEV; // get from environment
  var password = process.env.MLAB_PASSWORD_WEBDEV;
  connectionString = 'mongodb://' + username + ':' + password;
  connectionString += '@ds129004.mlab.com:29004/dasdasds'; // use yours
}

var mongoose = require("mongoose");

var db = mongoose.connect(connectionString);

module.exports = db;
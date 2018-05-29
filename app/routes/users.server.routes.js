//adding user-related routes that call the controller's methods.
const users = require('../../app/controllers/users.server.controller');
const passport = require('passport');

module.exports = function(app){
  app.route('/api/auth/signup').post(users.requiresLogin, users.hasAuthorization, users.signup);
  app.route('/api/auth/signin').post(users.signin);
  app.route('/api/auth/signout').get(users.signout);

  app.route('/api/members')
    .get(users.list);

  app.route('/api/members/:userId')
    .get(users.read)
    .put(users.requiresLogin,users.update)
    .delete(users.requiresLogin, users.delete);
  
  app.route('/api/forgotPassword')
    .post(users.forgotPassword);

  app.route('/api/resetPassword/:token')
    .get(users.resetPassword)
    .post(users.reset);

  app.route('/api/addPoint')
  .get(users.list);

  app.route ('/api/removePoint/:userId')
    .put(users.requiresLogin, users.removePoint);

  app.route('/api/addPoint/:userId')
    .get(users.read)
    .put(users.requiresLogin, users.addPoint);

  app.param('userId', users.userByID);
  app.param('token', users.userByToken);
};

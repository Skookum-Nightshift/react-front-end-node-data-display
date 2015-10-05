var alt = require('../alt');

class UserActions {
  updateUser(user) {
    this.dispatch(user);
  }

  deleteUser() {
    this.dispatch();
  }
}

module.exports = alt.createActions(UserActions);

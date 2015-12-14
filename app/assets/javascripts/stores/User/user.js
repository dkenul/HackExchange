(function (root) {
  var _users = [];
  var CHANGE_EVENT = "change";

  root.UsersStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    all: function () {
      return _users.slice();
    },

    resetUser: function(user) {
      var switched = false;
      _users.forEach(function(u) {
        if (u.id === user.id) {
          _users[_users.indexOf(u)] = user;
          switched = true;
        }
      });
      if (!switched) {_users.push(user);}
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {

        case UserConstants.RECEIVE_USERS:
          _users = payload.users;
          UsersStore.emit(CHANGE_EVENT);
          break;

        case UserConstants.RECEIVE_USER:
          UsersStore.resetUser(payload.user);
          UsersStore.emit(CHANGE_EVENT);
          break;
      }
    }),

    findUserById: function (id) {
      for (var i = 0; i < _users.length; i++) {
        if (_users[i].id === id) {
          return _users[i];
        }
      }

      return;
    }
  });
})(this);

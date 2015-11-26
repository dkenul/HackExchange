(function (root) {

  var _currentUser = {};
  var CHANGE_EVENT = "change";

  root.CurrentUserStore = $.extend({}, EventEmitter.prototype, {

    addChangeListener: function (callback) {
      this.on(CHANGE_EVENT, callback);
    },

    removeChangeListener: function (callback) {
      this.removeListener(CHANGE_EVENT, callback);
    },

    currentUser: function () {
      return $.extend({}, _currentUser);
    },

    isLoggedIn: function () {
      return (typeof _currentUser.id !== "undefined");
    },

    addCommunity: function(community) {
      _currentUser.communities.push(community);
    },

    dispatcherId: AppDispatcher.register(function (payload) {
      switch (payload.actionType) {
        case CurrentUserConstants.RECEIVE_CURRENT_USER:
          _currentUser = payload.currentUser;
          CurrentUserStore.emit(CHANGE_EVENT);
          break;

        case CurrentUserConstants.ADD_MEMBERSHIP:
          CurrentUserStore.addCommunity(payload.community);
          CurrentUserStore.emit(CHANGE_EVENT);
          break;
    }
    }),
  });
})(this);

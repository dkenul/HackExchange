var CurrentUserActions = {

  receiveCurrentUser: function (currentUser) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.RECEIVE_CURRENT_USER,
      currentUser: currentUser
    });
  },

  joinCommunity: function(community) {
    AppDispatcher.dispatch({
      actionType: CurrentUserConstants.ADD_MEMBERSHIP,
      community: community
    });
  }

};

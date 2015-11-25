NavActions = {
  receiveAll: function(communities){
    AppDispatcher.dispatch({
      actionType: "NAV_COMMUNITIES_RECEIVED",
      communities: communities
    });
  },
};

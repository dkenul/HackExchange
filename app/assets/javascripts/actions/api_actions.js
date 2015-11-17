ApiActions = {
  receiveAll: function(communities){
    AppDispatcher.dispatch({
      actionType: CommunityConstants.COMMUNITIES_RECEIVED,
      communities: communities
    });
  },

  receiveSingleCommunity: function (community) {
    AppDispatcher.dispatch({
      actionType: CommunityConstants.COMMUNITY_RECEIVED,
      community: community
    });
  }
};

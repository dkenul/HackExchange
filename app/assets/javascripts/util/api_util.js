window.ApiUtil = {
  fetchCommunities: function(){

    $.ajax({
      url: 'api/communities',
      type: 'GET',
      dataType: 'json',
      success: function(communities) {
        ApiActions.receiveAll(communities);
      }
    });
  },

  fetchSingleCommunity: function(id) {
    $.ajax({
      url: 'api/communities/' + id,
      type: 'GET',
      dataType: 'json',
      success: function(community) {
        ApiActions.receiveSingleCommunity(community);
      }
    });
  },

  createCommunity: function(community) {
    $.ajax({
      url: 'api/communities',
      type: 'POST',
      dataType: 'json',
      data: {community: community},
      success: function (community) {
        ApiActions.receiveSingleCommunity(community);
        callback && callback(community.id);
      }
    });
  }
};
